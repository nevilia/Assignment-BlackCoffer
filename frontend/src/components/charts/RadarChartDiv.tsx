import { useState } from 'react';
import DropdownFilter from '../DropdownFilter';
import RadarChart from './RadarChart';

function RadarChartDiv() {
    const [selectedField, setSelectedField] = useState('intensity');
    const [selectedDisplayField, setselectedDisplayField] = useState('intensity');

  const handleSelectField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(e.target.value);
  };
  const handleSelectedDisplayField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedDisplayField(e.target.value);
  };

  const options1 = [
    { label: 'Intensity', value: 'intensity' },
    { label: 'Relevance', value: 'relevance' },
    { label: 'Likelihood', value: 'likelihood' },
    
  ];

  const options2 = [
    { label: 'Pestle', value: 'pestle' },
    { label: 'Region', value: 'region' },
    { label: 'Country', value: 'country' },
    
  ]

  return (
    <div>
      <div className="flex justify-between items-center px-10 sm:px-3 py-7 gap-2">
        <DropdownFilter options={options1} onSelect={handleSelectField} />
        by
        <DropdownFilter options={options2} onSelect={handleSelectedDisplayField} />
        <h1 className='pl-6 lg:text-xl text-normal capitalize'>Radar Chart by {`${selectedField}`}</h1>
      </div>
      <div className="p-5 w-full h-full">
        <RadarChart fieldName={selectedField} fieldToDisplay={selectedDisplayField}/>
      </div>
    </div>
  )
}

export default RadarChartDiv