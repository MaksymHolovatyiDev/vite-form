import BaseTitles from '@/components/BaseTitles/BaseTitles';
import MainPanel from '@/components/MainPanel/MainPanel';
import AddonsSelect from '@/components/Addons/Addons';

function Addons() {
  return (
    <MainPanel>
      <BaseTitles>
        <AddonsSelect />
      </BaseTitles>
    </MainPanel>
  );
}

export default Addons;
