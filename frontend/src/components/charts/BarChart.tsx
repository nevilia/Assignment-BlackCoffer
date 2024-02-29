import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchData } from '../ApiUtils';
import { ChartOptions } from 'chart.js';


const BarChart = ({ fieldName }: any) => {
    const [chartData, setChartData] = useState<{ fieldCounts: number; count: number }[]>([]);

    useEffect(() => {
        const fetchChartData = async () => {

            const data = await fetchData();

            const filteredData = data.filter((item: any) => item[fieldName]);

            // console.log(fieldName, "=>", filteredData) // Array of all objects or documents containing value at fieldName ie not taking in undefined or null

            const counts: { [key: number]: number } = {};
            filteredData.forEach((item: any) => {
                counts[item[fieldName]] = (counts[item[fieldName]] || 0) + 1;
            });

            // console.log(fieldName, "=>", counts) // Object of frequency of each available value

            const fieldChartData = Object.entries(counts).map(([fieldCounts, count]) => ({
                fieldCounts: parseInt(fieldCounts),
                count
            }));

            // console.log(fieldName, "=>", fieldChartData) // Array of {key, val} ir [{}, {}, ...]

            setChartData(fieldChartData);

        };

        fetchChartData();
    }, [fieldName]);

    // Define chart data and options
    const data = {
        labels: chartData.map(dataPoint => dataPoint.fieldCounts.toString()), // y
        datasets: [
            {                                                                 // x
                label: fieldName,
                data: chartData.map(dataPoint => dataPoint.count),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Count' } },
            x: { title: { display: true, text: fieldName } }
        }
    };

    return (
        <div className=''>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
