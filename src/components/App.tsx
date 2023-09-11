import '@/css/App.css';
import {Routes, Route} from 'react-router-dom';
import {MainRoutes} from '@/environment/MainRoutes';
import DataProvider from '@/Providers/DataProvider';
import MainPanelProvider from '@/Providers/MainPanelProvider';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import SelectPlan from './SelectPlan/SelectPlan';
import Addons from './Addons/Addons';
import Finish from './Finish/Finish';
import Thank from './Thank/Thank';

function App() {
  return (
    <DataProvider>
      <MainPanelProvider>
        <Routes>
          <Route path={MainRoutes.Default} element={<PersonalInfo />} />
          <Route path={MainRoutes.Plan} element={<SelectPlan />} />
          <Route path={MainRoutes.Addons} element={<Addons />} />
          <Route path={MainRoutes.Summary} element={<Finish />} />
          <Route path={MainRoutes.Thank} element={<Thank />} />
          <Route path="*" element={<PersonalInfo />} />
        </Routes>
      </MainPanelProvider>
    </DataProvider>
  );
}

export default App;
