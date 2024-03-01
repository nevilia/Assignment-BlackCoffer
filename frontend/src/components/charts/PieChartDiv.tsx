import { useState } from 'react';
import DropdownFilter from '../DropdownFilter';
import PieChart from './PieChart';

function PieChartDiv() {
    const [selectedField, setSelectedField] = useState('pestle');

  const handleSelectField = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(e.target.value);
  };

  const options = [
    { label: 'Pestle', value: 'pestle' },
    { label: 'Country', value: 'country' },
    { label: 'Region', value: 'region' },
    { label: 'Sector', value: 'sector' },
    { label: 'Topics', value: 'topic' },
    
    { label: 'Source', value: 'source' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-7">
        <DropdownFilter options={options} onSelect={handleSelectField} />
        <h1 className='pl-6 lg:text-2xl text-normal font-semibold capitalize'>Contribution Chart by {`${selectedField}`}</h1>
      </div>
      <div className="p-5 w-full h-full">
        <PieChart fieldName={selectedField}/>
      </div>
    </div>
  )
}

export default PieChartDiv