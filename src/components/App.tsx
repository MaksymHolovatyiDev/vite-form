import '@/css/App.css';
import MainPanel from './MainPanel/MainPanel';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import SelectPlan from './SelectPlan/SelectPlan';
import Thank from './Thank/Thank';
import Finish from './Finish/Finish';
import Addons from './Addons/Addons';

function App() {
  return (
    <>
      <MainPanel>
        <Finish />
      </MainPanel>
    </>
  );
}

export default App;
