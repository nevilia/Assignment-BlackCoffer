import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Insight } from './../ChartUtils';
import { fetchData } from './../ApiUtils';

const RelevanceBarChart: React.FC = () => {
    const [relevanceData, setRelevanceData] = useState<{ relevance: number; count: number; }[]>([]);

    useEffect(() => {
        const fetchRelevanceData = async () => {

            const data: Insight[] = await fetchData();

            const relevanceCounts: { [key: number]: number } = {};
            data.forEach(item => {
                const required = item.relevance
                relevanceCounts[required] = (relevanceCounts[required] || 0) + 1;
            });

            // Object.entries gives an array of arrays ie [[k1,v1], [k2,v2]...]
            const relevanceChartData = Object.entries(relevanceCounts).map(([relevance, count]) => ({
                relevance: parseInt(relevance),
                count,
            }));

            setRelevanceData(relevanceChartData);

        };

        fetchRelevanceData();
    }, []);

    return (
        <div className='chartCard' >
            <h2>Relevance Bar Chart</h2>
            <Bar
                data={{
                    labels: relevanceData.map(item => item.relevance),
                    datasets: [{
                        label: 'Count',
                        data: relevanceData.map(item => item.count),
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1,
                    }]
                }}
                options={{
                    scales: {
                        y: { beginAtZero: true, title: { display: true, text: 'Count' } },
                        x: { title: { display: true, text: 'Relevance' } }
                    }
                }}
            />
        </div>
    );
};

export default RelevanceBarChart;
