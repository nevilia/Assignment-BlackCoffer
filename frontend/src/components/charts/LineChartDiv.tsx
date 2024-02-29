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
      <div className="px-10 py-7">
        <DropdownFilter options={options} onSelect={handleSelectField} />
      </div>
      <div className=" w-full p-5">
        <LineChart fieldName={selectedField} />
      </div>
    </div>
  );
};

export default LineChartDiv;
