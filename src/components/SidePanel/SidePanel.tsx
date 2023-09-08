import {sidePanelData} from '@/constants/constants';
import SidePanelLink from '../SidePanelLink/SidePanelLink';

function SidePanel() {
  return (
    <div className="bg-bg-desktop bg-no-repeat bg-cover bg-center flex justify-center items-start w-1/4 h-full rounded-lg pt-6 mobile:bg-bg-mobile mobile:w-full mobile:h-1/5 mobile:rounded-none mobile:pt-10 side-panel-h m-pos">
      <ul className="flex flex-col justify-start items-start gap-4 mobile:flex-row mobile:justify-around mobile:items-center mobile:w-screen mobile:mx-10">
        {sidePanelData.map((el, idx) => (
          <li>
            <SidePanelLink data={el} idx={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
