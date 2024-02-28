import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Insight } from './../ChartUtils';
import { fetchData } from './../ApiUtils';

const LikelihoodBarChart: React.FC = () => {
  const [likelihoodData, setLikelihoodData] = useState<{ likelihood: number; count: number; }[]>([]);

  useEffect(() => {
    const fetchChartData = async () => {
      
        const data: Insight[] = await fetchData();

        const filteredData = data.filter((item: Insight) => item.likelihood);

        const likelihoodCounts: { [key: number]: number } = {};
        filteredData.forEach(item => {
          likelihoodCounts[item.likelihood] = (likelihoodCounts[item.likelihood] || 0) + 1;
        });

        const likelihoodChartData = Object.entries(likelihoodCounts).map(([likelihood, count]) => ({
          likelihood: parseInt(likelihood),
          count,
        }));

        setLikelihoodData(likelihoodChartData);
      
    };

    fetchChartData();
  }, []);

  return (
    <div className='chartCard' >
      <h2>Likelihood Bar Chart</h2>
      {likelihoodData.length > 0 ? (
        <Bar
          data={{
            labels: likelihoodData.map(item => item.likelihood),
            datasets: [{
              label: 'Count',
              data: likelihoodData.map(item => item.count),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }]
          }}
          options={{
            scales: {
              y: { beginAtZero: true, title: { display: true, text: 'Count' } },
              x: { title: { display: true, text: 'Likelihood' } }
            }
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LikelihoodBarChart;
