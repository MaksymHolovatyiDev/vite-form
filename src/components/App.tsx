import '@/css/App.css';
import MainPanel from './MainPanel/MainPanel';
import PersonalInfo from './PersonalInfo/PersonalInfo';

function App() {
  return (
    <>
      <MainPanel>
        <PersonalInfo/>
      </MainPanel>
    </>
  );
}

export default App;
