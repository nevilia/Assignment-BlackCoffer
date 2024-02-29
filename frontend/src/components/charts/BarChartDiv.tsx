import BarChart from "./BarChart"
import DropdownFilter from "../DropdownFilter"
import { useState } from "react"

function BarChartDiv() {
  const [selectedField, setSelectedField] = useState('relevance')

  const handleSelectField = (e: any) => {
    setSelectedField(e.target.value)
  }

  const options = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Intensity', value: 'intensity' },
    { label: 'Likelihood', value: 'likelihood' },
  ]

  return (
    <div >
      <div className="flex justify-between items-center px-10 py-7">
        <DropdownFilter options={options} onSelect={handleSelectField} />
        <h1 className='text-2xl font-semibold'>Frequency Chart by {`${selectedField}`}</h1>
      </div>
      <div className="w-full h-full p-5 ">
        <BarChart fieldName={selectedField}/>
      </div>
      
      
    </div>
  )
}

export default BarChartDiv