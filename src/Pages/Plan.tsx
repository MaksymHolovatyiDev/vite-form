import BaseTitles from '@/components/BaseTitles/BaseTitles';
import MainPanel from '@/components/MainPanel/MainPanel';
import SelectPlan from '@/components/SelectPlan/SelectPlan';

function Plan() {
  return (
    <MainPanel>
      <BaseTitles>
        <SelectPlan />
      </BaseTitles>
    </MainPanel>
  );
}

export default Plan;
