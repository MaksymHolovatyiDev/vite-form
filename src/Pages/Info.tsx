import BaseTitles from '@/components/BaseTitles/BaseTitles';
import MainPanel from '@/components/MainPanel/MainPanel';
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo';

function Info() {
  return (
    <MainPanel>
      <BaseTitles>
        <PersonalInfo />
      </BaseTitles>
    </MainPanel>
  );
}

export default Info;
