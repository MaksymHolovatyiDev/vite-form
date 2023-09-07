import '@/css/App.css';
import Info from '@/Pages/Info';
import Plan from '@/Pages/Plan';
import {Routes, Route} from 'react-router-dom';
import {MainRoutes} from '@/environment/variables';
import DataProvider from '@/Provider';
import Addons from '@/Pages/Addons';
import Summary from '@/Pages/Summary';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path={MainRoutes.default} element={<Info />} />
        <Route path={MainRoutes.plan} element={<Plan />} />
        <Route path={MainRoutes.addons} element={<Addons />} />
        <Route path={MainRoutes.summary} element={<Summary />} />f
        <Route path="*" element={<Info />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
