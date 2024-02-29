import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from '../ApiUtils';

interface LineChartData {
    year: string;
    region: string;
    country: string;
    likelihood: number;
    relevance: number;
    intensity: number;
    [key: string]: string | number;
}

const LineChart: React.FC<{ fieldName: string }> = ({ fieldName }) => {
    const [chartData, setChartData] = useState<LineChartData[]>([]);

    useEffect(() => {
        const fetchChartData = async () => {
            const data = await fetchData();

            setChartData(data);
        };

        fetchChartData();
    }, []);

    // Filter data based on selected field name, only containing documents where fieldName has truthy values eg likelihood: 3 but not likelihood: null
    const filteredData = chartData.filter((data: any) => data[fieldName]);

    // Make Set of filteredData to get unique x axis values only
    const uniqueXValues = Array.from(new Set(filteredData.map((data: any) => data[fieldName])));
    
    // Prepare chart labels and datasets
    const labels = uniqueXValues.sort();
    // console.log(fieldName, 'label =>', labels)
    // map each unique value of xValue from uniqueXValues to the corresponding likelihood, relevance, and intensity values from filteredData, assuming they exist for each value of xValue.
    // eg lets say for start_year field, uniqueXValues = [2016, 2017...]
    // for each item in it, lets start with 2016, we find in the filteredData set, in each document, where start_year === 2016
    // for error handling writing ?
    // now we found out all filtered docuemnts where start_year is 2016
    // mapping will create the array of counts
    // the order of the two arrays will be correctly corresponding to each other
    const likelihoodData = uniqueXValues.map(xValue => filteredData.find(data => data[fieldName] === xValue)?.likelihood );
    const relevanceData = uniqueXValues.map(xValue => filteredData.find(data => data[fieldName] === xValue)?.relevance );
    const intensityData = uniqueXValues.map(xValue => filteredData.find(data => data[fieldName] === xValue)?.intensity );

    // console.log(fieldName, 'intensityData =>', intensityData)

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Likelihood',
                data: likelihoodData,
                fill: false,
                borderColor: 'rgba(0,194,199, 1)',
                tension: 0.1,
                pointRadius: 0
            },
            {
                label: 'Relevance',
                data: relevanceData,
                fill: false,
                borderColor: 'rgba(94,60,88, 1)',
                tension: 0.1,
                pointRadius: 0
            },
            {
                label: 'Intensity',
                data: intensityData,
                fill: false,
                borderColor: 'rgba(255,191,0, 1)',
                tension: 0.1,
                pointRadius: 2
            },
        ],
    };

    const options: any = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: fieldName,
                },
                ticks: {
                    beginAtZero: true,
                    minRotation: 0,
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 50, // Adjust the maximum number of ticks displayed
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },

            },
        },
    };

    return (
        <div className='h-full w-full'>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
