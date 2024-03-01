import React from 'react';

const Data: React.FC = () => {
    return (
        <div className="p-10 bg-white rounded-[18px] my-10 mx-5">
            <h2 className="text-2xl font-bold underline mb-4">Data Overview</h2>
            <p className="mb-4">
                The data is coming from an API hosted at <a href="https://assignment-blackcoffer-backend.onrender.com/api/items" target="_blank" rel="noopener noreferrer" className="text-blue-600">https://assignment-blackcoffer-backend.onrender.com/api/items</a>.
            </p>
            <section className="mb-6">
                <h3 className="text-lg font-bold mb-2">Types of Graphs Used:</h3>
                <ul className="list-disc ml-6">
                    <li>
                        Line Chart - Showing Collective information over filtered range
                    </li>
                    <li>
                        Bar Chart - Showcasing Frequency of filtered metric
                    </li>
                    <li>
                        Pie Chart - Depicting Contribution percentage of required metric
                    </li>
                </ul>
            </section>
            <section>
                <h3 className="text-lg font-bold mb-2">Filters for Each Graph:</h3>
                <ol className="list-decimal ml-6">
                    <li>
                        Line Chart
                        <ul className="list-disc ml-6">
                            <li>Start Year</li>
                            <li>End Year</li>
                            <li>Region</li>
                            <li>Country</li>
                        </ul>
                    </li>
                    <li>
                        Bar Chart
                        <ul className="list-disc ml-6">
                            <li>Relevance</li>
                            <li>Intensity</li>
                            <li>Likelihood</li>
                        </ul>
                    </li>
                    <li>
                        Pie Chart
                        <ul className="list-disc ml-6">
                            <li>Pestle</li>
                            <li>Country</li>
                            <li>Region</li>
                            <li>Sector</li>
                            <li>Topic</li>
                            <li>Source</li>
                        </ul>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default Data;
