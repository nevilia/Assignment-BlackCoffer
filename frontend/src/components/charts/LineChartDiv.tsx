import { useState } from 'react';
import DropdownFilter from '../DropdownFilter';
import LineChart from './LineChart';

const LineChartDiv: React.FC = () => {
  const [selectedField, setSelectedField] = useState('start_year');

  const handleSelectField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(e.target.value);
  };

  const options = [
    { label: 'Start Year', value: 'start_year' },
    { label: 'End Year', value: 'end_year' },
    { label: 'Region', value: 'region' },
    { label: 'Country', value: 'country' },
  ];

  return (
    <div className="">
      <div className="flex justify-between  items-center px-10 py-7">
        <DropdownFilter options={options} onSelect={handleSelectField} />
        <h1 className='pl-6 lg:text-xl text-normal capitalize'>Collective Chart by {`${selectedField}`}</h1>
      </div>
      <div className="p-5">
        <LineChart fieldName={selectedField} />
      </div>
    </div>
  );
};

export default LineChartDiv;
