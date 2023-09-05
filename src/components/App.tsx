import '@/css/App.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import SelectPlan from './SelectPlan/SelectPlan';
import Addons from './Addons/Addons';
import SidePanel from './SidePanel/SidePanel';

function App() {
  return (
    <>
      <SidePanel />
      <PersonalInfo />
      <SelectPlan />
      <Addons />
    </>
  );
}

export default App;
