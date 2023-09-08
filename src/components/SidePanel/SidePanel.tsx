import {sidePanelData} from '@/constants/constants';
import SidePanelLink from '../SidePanelLink/SidePanelLink';

function SidePanel() {
  return (
    <div className="sidebar-bg bg-no-repeat bg-cover bg-center flex justify-center items-start w-1/4 h-full rounded-lg pt-6 mobile:w-full mobile:h-1/5 mobile:rounded-none mobile:pt-10 side-panel-h m-pos">
      <ul className="flex flex-col justify-start items-start gap-4 mobile:flex-row mobile:justify-around mobile:items-center mobile:w-screen mobile:mx-10">
        {sidePanelData.map((el, idx) => (
          <li key={el.route+el.text}>
            <SidePanelLink data={el} idx={idx+1} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
