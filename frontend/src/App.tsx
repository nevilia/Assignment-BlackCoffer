import 'chart.js/auto'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SlideOver from './components/SlideOver';
import BarChartDiv from './components/charts/BarChartDiv';
import LineChartDiv from './components/charts/LineChartDiv';
import PieChartDiv from './components/charts/PieChartDiv';
import Data from './components/pages/Data';
import RadarChartDiv from './components/charts/RadarChartDiv';

function MainDiv() {
  return (
    <div className='main m-10'>
                <div className='flex flex-wrap w-full gap-6 '>
                  {/* 1st row */}
                  <div className='flex flex-wrap md:flex-nowrap justify-between h-auto w-full gap-4'>
                    <div className='w-full max-h-[500px] md:w-[55%] flex-shrink-0 shadow-md rounded-[18px] bg-white hover:shadow-xl'>
                      <LineChartDiv />
                    </div>
                    <div className="w-full lg:w-[43%] bg-white rounded-[18px] shadow-md hover:shadow-xl">
                      <BarChartDiv />
                    </div>
                  </div>
                  {/* 2nd row */}
                  <div className='flex flex-wrap md:flex-nowrap h-auto w-full justify-between gap-4'>
                    <div className=' w-full sm:min-h-[300px] md:w-[49%] flex-shrink-0 bg-white rounded-[18px] shadow-md hover:shadow-xl'>
                      <PieChartDiv />
                    </div>
                    <div className=' w-full sm:min-h-[300px] md:w-[49%] bg-white rounded-[18px] shadow-md hover:shadow-xl'>
                      <RadarChartDiv/>
                    </div>
                  </div>

                </div>
              </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <div className='flex'>
        <div className="hidden sm:block bg-[#cfe8ef] text-black">
          <SlideOver />
        </div>

        <div className='sm:w-full' >
          <NavBar />
          <Routes>
            <Route path='/' element={<MainDiv/>} />
            <Route path='/data' element={<Data/>} />
          </Routes>
        </div>

      </div>

    </Router>
  );
};

export default App;