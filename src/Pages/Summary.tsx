import {useState} from 'react';
import BaseTitles from '@/components/BaseTitles/BaseTitles';
import MainPanel from '@/components/MainPanel/MainPanel';
import Finish from '@/components/Finish/Finish';
import Thank from '@/components/Thank/Thank';

function Summary() {
  const [thank, setThank] = useState(false);

  return (
    <MainPanel>
      {thank ? (
        <Thank />
      ) : (
        <BaseTitles>
          <Finish setThank={setThank} />
        </BaseTitles>
      )}
    </MainPanel>
  );
}

export default Summary;
