import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from './../ApiUtils';
import { Insight } from './../ChartUtils'; // Import the Insight interface

const IntensityLineChart = () => {
  const [lineChartData, setLineChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchLineChartData = async () => {
      const data: Insight[] = await fetchData(); // Specify the type of data as Insight[]

      // Filter out data points with missing intensity
      const filteredData = data.filter((item: Insight) => item.intensity !== undefined && item.intensity !== '');

      // Group data points by year and calculate average intensity
      const intensityByYear: { [year: string]: { totalIntensity: number; count: number } } = {};
      filteredData.forEach((item: Insight) => {
        const year = item.start_year || 'Unknown';
        if (!intensityByYear[year]) {
          intensityByYear[year] = { totalIntensity: 0, count: 0 };
        }
        intensityByYear[year].totalIntensity += parseFloat(item.intensity as string);
        intensityByYear[year].count++;
      });

      const averageIntensityByYear: { [year: string]: number } = {};
      Object.keys(intensityByYear).forEach((year) => {
        averageIntensityByYear[year] = intensityByYear[year].totalIntensity / intensityByYear[year].count;
      });

      // Prepare data for the line chart
      const labels = Object.keys(averageIntensityByYear);
      const dataValues = Object.values(averageIntensityByYear);
      setLineChartData({
        labels,
        datasets: [
          {
            label: 'Average Intensity',
            data: dataValues,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      });
    };

    fetchLineChartData();
  }, []);

  return (
    <div className='chartCard' >
      <h2>Line Chart for Intensity Over Time</h2>
      <Line data={lineChartData} />
    </div>
  );
};

export default IntensityLineChart;
