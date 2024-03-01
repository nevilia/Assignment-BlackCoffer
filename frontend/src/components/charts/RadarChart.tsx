import { Radar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { fetchData } from '../ApiUtils';

interface Props {
  fieldName: string;
  fieldToDisplay: string;
}

function RadarChart({ fieldName, fieldToDisplay }: Props) {
  const [chartData, setChartData] = useState<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      const apiData = await fetchData();

      // Group data by the specified field and calculate fieldName count for each group
      const fieldCounts: { [key: string]: number } = {};
      apiData.forEach((item: any) => {
        const field = item[fieldToDisplay] || 'Undefined'; // Default to "Others" if the field is empty
        const fieldNameCount = item[fieldName] || 0;

        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
        }
        fieldCounts[field] += fieldNameCount;
      });

      // console.log('fieldCounts', fieldCounts)

      // Sort fieldCounts by count and limit to 10 entries
      const sortedFields = Object.keys(fieldCounts).sort((a, b) => fieldCounts[b] - fieldCounts[a]).slice(0, 10); //bubble sort in decreasing order, then take the biggest 10

      // Calculate the total count for "Others"
      const othersCount = Object.keys(fieldCounts).reduce((currCount, key) => {
        if (!sortedFields.includes(key)) { // should not be in the sortedFields only then goes in Others
          return currCount + fieldCounts[key];
        }
        return currCount;
      }, 0); // initial val set to 0

      // Convert sortedFields and "Others" to label and data arrays
      const labels = [...sortedFields, 'Others'];
      const data = [...sortedFields.map(field => fieldCounts[field]), othersCount];

      setChartData({ labels, data });
    };

    fetchChartData();
  }, [fieldName, fieldToDisplay]); 

  const backgroundColor = fieldName === 'relevance' ? 'rgba(94,60,88, 0.2)' :
    fieldName === 'likelihood' ? 'rgba(0,194,199, 0.2)' :
      'rgba(255,191,0, 0.2)';
  const borderColor = fieldName === 'relevance' ? 'rgba(94,60,88, 1)' :
    fieldName === 'likelihood' ? 'rgba(0,194,199, 1)' :
      'rgba(255,191,0, 1)';

  const radarData = {
    labels: chartData.labels,
    datasets: [
      {
        label: `${fieldName} Count`,
        data: chartData.data,
        backgroundColor,
        borderColor,
        borderWidth: 2,
      },
    ],
  };

  const options: any = {
    scale: {
      ticks: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Radar data={radarData} options={options} />
    </div>
  );
}

export default RadarChart;
