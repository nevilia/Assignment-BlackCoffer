import { Pie } from "react-chartjs-2"
import { useState, useEffect} from 'react'
import { fetchData } from "../ApiUtils"

function PieChart({fieldName}: {fieldName: string}) {
    const [chartData, setChartData] = useState<{label: string; count:number}[]>([])

    useEffect( () => {
        const fetchChartData =async () => {
            const data = await fetchData()

            // only where country or region is truthy
            const filteredData = data.filter((item: any) =>item[fieldName]) 

            const counts: {[key: string]: number} = {}
            filteredData.forEach((item:any) => {
                counts[item[fieldName]] = (counts[item[fieldName]] || 0) + 1
            });

            // console.log(counts, typeof(counts))

            // Sort lables using count 
            const sortedLabels = Object.keys(counts).sort((a,b) => (counts[b] - counts[a]))

            const topLabels = sortedLabels.slice(0, 10).map(label => ({label, count:counts[label]}))

            const otherCount = sortedLabels.slice(10).reduce((acc, label) => acc + counts[label], 0);
            const chartDataArray = [...topLabels, { label: "Others", count: otherCount }];

            // convert counts to an array of objects
            // const chartDataArray = Object.entries(counts).map(([label, count]) => (
            //     {
            //     label, 
            //     count
            //     }
            // ))

            // console.log(chartDataArray)
            setChartData(chartDataArray)
        }

        fetchChartData()
    }, [fieldName])

    const data = {
        labels: chartData.map(dataPoint => dataPoint.label),
        datasets: [{
            data: chartData.map(dataPoint => dataPoint.count),
            backgroundColor: [
                'rgba(242, 158, 76, 0.6)',
                'rgba(241, 196, 83, 0.6)',
                'rgba(239, 234, 90, 0.6)',
                'rgba(185, 231, 105, 0.6)',
                'rgba(131, 227, 119, 0.6)',
                'rgba(22, 219, 147, 0.6)',
                'rgba(22, 219, 147, 0.6)',
                'rgba(4, 139, 168, 0.6)',
                'rgba(44, 105, 154, 0.6)',
                'rgba(84, 71, 140, 0.6)',
                'rgba(71, 18, 107, 0.6)'
            ],
            hoverBackgroundColor: [
                'rgba(242, 158, 76, 1)',
                'rgba(241, 196, 83, 1)',
                'rgba(239, 234, 90, 1)',
                'rgba(185, 231, 105, 1)',
                'rgba(131, 227, 119, 1)',
                'rgba(22, 219, 147, 1)',
                'rgba(22, 219, 147, 1)',
                'rgba(4, 139, 168, 1)',
                'rgba(44, 105, 154, 1)',
                'rgba(84, 71, 140, 1)',
                'rgba(71, 18, 107, 1)'
            ]
        }]
    }

    const options = {

    }
  return (
    <div>
        <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart