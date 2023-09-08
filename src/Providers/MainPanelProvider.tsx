import {useLocation} from 'react-router-dom';
import SidePanel from '../components/SidePanel/SidePanel';
import {getData} from '@/constants/constants';
import {MainRoutes} from '@/environment/MainRoutes';

function MainPanelProvider({children}: {children: React.ReactNode}) {
  const location = useLocation();
  const titleData: any = getData[location.pathname as keyof typeof getData]
    ? getData[location.pathname as keyof typeof getData]
    : getData[MainRoutes.Default];

  return (
    <div className="bg-white flex p-2 h-full max-height w-3/5 absolute top-1/2 left-1/2 translate-center rounded mobile:w-screen mobile:bg-Magnolia mobile:p-0 mobile:flex-col mobile:items-center mobile:top-0 mobile:left-0 base-min-h">
      <SidePanel />
      <div className="base-container mobile:bg-white mobile:rounded-xl">
        <p className="main-title mb-2">{titleData.title}</p>
        <p className="text-Cool-Gray mb-8 mobile:w-5/6 mobile:mb-1">
          {titleData.actions}
        </p>
        {children}
      </div>
    </div>
  );
}

export default MainPanelProvider;
