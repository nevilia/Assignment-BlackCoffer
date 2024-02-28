import 'chart.js/auto'
import LikelihoodBarChart from './components/charts/LikelihoodBarChart';
import RelevanceBarChart from './components/charts/RelevanceBarChart';
import IntensityLineChart from './components/charts/IntensityLineChart';
import TopicsStackedBarChart from './components/charts/TopicsStackedBarChart';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div >
      <NavBar />

      <div className='flex flex-wrap w-full '>
        <LikelihoodBarChart />
        <RelevanceBarChart />
        <IntensityLineChart />
        <TopicsStackedBarChart />
      </div>

    </div>
  );
};

export default App;