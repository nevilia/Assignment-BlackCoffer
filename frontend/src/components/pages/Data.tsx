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
                        <b> Line Chart </b> - Showing Collective information over filtered range
                    </li>
                    <li>
                        <b>Bar Chart </b> - Showcasing Frequency of filtered metric
                    </li>
                    <li>
                        <b> Pie Chart </b> - Depicting Contribution percentage of required metric
                    </li>
                    <li>
                        <b> Radar Chart </b> - Showing distribution of counts of different fields over different category, one pair at a time
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
                    <br />
                    <li>
                        Bar Chart
                        <ul className="list-disc ml-6">
                            <li>Relevance</li>
                            <li>Intensity</li>
                            <li>Likelihood</li>
                        </ul>
                    </li>
                    <br />
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
                    <br />
                    <li>
                        Radar Chart
                        <ul className="list-decimal ml-6">
                            <li> First filter set
                                <ul className="list-disc ml-6"> 
                                    <li>Relevance</li>
                                    <li>Intensity</li>
                                    <li>Likelihood</li>
                                </ul>
                            </li>
                            <li>
                            Second filter set
                                <ul className="list-disc ml-6">

                                    <li>Pestle</li>
                                    <li>Country</li>
                                    <li>Region</li>
                                    <li>Sector</li>
                                    <li>Topic</li>
                                    <li>Source</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default Data;
