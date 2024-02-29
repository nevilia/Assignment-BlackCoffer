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

  // Filter data based on selected field name
  const filteredData = chartData.filter((data: any) => data[fieldName]);

  // Prepare chart labels and datasets
  const labels = filteredData.map((data: any) => data[fieldName]);
  const likelihoodData = filteredData.map((data) => data.likelihood);
  const relevanceData = filteredData.map((data) => data.relevance);
  const intensityData = filteredData.map((data) => data.intensity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Likelihood',
        data: likelihoodData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        pointRadius: 0
      },
      {
        label: 'Relevance',
        data: relevanceData,
        fill: false,
        borderColor: 'rgba(192, 75, 192, 1)',
        tension: 0.1,
        pointRadius: 0
      },
      {
        label: 'Intensity',
        data: intensityData,
        fill: false,
        borderColor: 'rgba(192, 192, 75, 1)',
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
            maxTicksLimit: 20, // Adjust the maximum number of ticks displayed
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
    <div className=''>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
