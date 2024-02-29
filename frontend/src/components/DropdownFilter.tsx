import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownFilter: React.FC<Props> = ({ options, onSelect }) => {
  return (
    <select className="p-2 rounded-[18px] border border-gray-300" onChange={onSelect}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default DropdownFilter;
