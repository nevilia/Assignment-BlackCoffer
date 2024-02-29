import 'chart.js/auto'
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import SlideOver from './components/SlideOver';
import BarChartDiv from './components/charts/BarChartDiv';
import LineChartDiv from './components/charts/LineChartDiv';

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex'>
        <div className="hidden sm:block bg-[#cfe8ef] text-black">
          <SlideOver />
        </div>

        <div className='sm:w-full' >
          <NavBar />
          <div className='m-10'>
            <div className='flex flex-wrap w-full gap-6 '>
              {/* 1st row */}
              <div className='flex justify-between h-[430px] w-full'>
                <div className=' w-[49%] bg-white rounded-[18px] shadow-md p-10 hover:shadow-xl'>
                  Pie or Doughnut Chart
                </div>
                <div className=" w-[49%] bg-white rounded-[18px] shadow-md hover:shadow-xl">
                  <BarChartDiv />
                </div>
              </div>
              {/* 2nd row */}
              <div className='w-full  md:w-full  shadow-md rounded-[18px] bg-white hover:shadow-xl'>
                <LineChartDiv />
              </div>
              {/* <BarChart fieldName='relevance'/>
            <BarChart fieldName='intensity'/>
            <BarChart fieldName='likelihood'/> */}

              {/* <IntensityLineChart />
            <TopicsStackedBarChart /> */}
            </div>
          </div>

        </div>

      </div>
    </Router>
  );
};

export default App;