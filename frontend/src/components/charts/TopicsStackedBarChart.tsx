import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Insight } from './../ChartUtils';
import { fetchData } from './../ApiUtils';

const TopicsStackedBarChart: React.FC = () => {
  const [stackedBarChartData, setStackedBarChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchStackedBarChartData = async () => {
      const data: Insight[] = await fetchData(); // Specify the type of data as Insight[]

      // Filter out data points with missing or undefined values for topic and sector
      const filteredData = data.filter((item: Insight) => item.topic && item.sector);

      // Group data by topic and sector, counting the number of insights for each combination
      const groupedData: { [topic: string]: { [sector: string]: number } } = {};
      filteredData.forEach((item: Insight) => {
        if (!groupedData[item.topic]) {
          groupedData[item.topic] = {};
        }
        if (!groupedData[item.topic][item.sector]) {
          groupedData[item.topic][item.sector] = 0;
        }
        groupedData[item.topic][item.sector]++;
      });

      // Prepare data for the stacked bar chart
      const labels = Object.keys(groupedData);
      const datasets = Object.keys(groupedData[labels[0]]).map((sector) => ({
        label: sector,
        data: labels.map((topic) => groupedData[topic][sector] || 0),
        stack: 'stack1', // Ensure bars are stacked
      }));

      setStackedBarChartData({ labels, datasets });
    };

    fetchStackedBarChartData();
  }, []);

  return (
    <div className='chartCard'>
      <h2>Stacked Bar Chart for Topics</h2>
      <Bar
        data={stackedBarChartData}
        options={{
          scales: {
            x: { stacked: true }, // Stack bars horizontally
            y: { stacked: true, ticks: {
                stepSize: 1, // Set the step size for the Y-axis
              } }, // Stack bars vertically
          },
        }}
      />
    </div>
  );
};

export default TopicsStackedBarChart;
