import {getData} from '@/constants/constants';
import {MainRoutes} from '@/environment/variables';
import {Link, useLocation} from 'react-router-dom';

function SidePanel() {
  const location = useLocation();
  const titleData = getData(location.pathname);

  return (
    <div className="bg-bg-desktop bg-no-repeat bg-cover bg-center flex justify-center items-start w-1/4 h-full rounded-lg pt-6 mobile:bg-bg-mobile mobile:w-full mobile:h-1/5 mobile:rounded-none mobile:pt-10 side-panel-h m-pos">
      <div className="flex flex-col justify-start items-start gap-4 mobile:flex-row mobile:justify-around mobile:items-center mobile:w-screen mobile:mx-10">
        <Link
          to={MainRoutes.default}
          className={`${
            titleData.route === MainRoutes.default &&
            'before:bg-white before:text-black'
          } link before:content-["1"]`}>
          <p className="text-Cool-Gray mobile:hidden">Step 1</p>
          <p className="mobile:hidden">Your Info</p>
        </Link>
        <Link
          to={MainRoutes.plan}
          className={`${
            titleData.route === MainRoutes.plan &&
            'before:bg-white before:text-black'
          } link before:content-["2"]`}>
          <p className="text-Cool-Gray mobile:hidden">Step 2</p>
          <p className="mobile:hidden">Select Plan</p>
        </Link>
        <Link
          to={MainRoutes.addons}
          className={`${
            titleData.route === MainRoutes.addons &&
            'before:bg-white before:text-black'
          } link before:content-["3"]`}>
          <p className="text-Cool-Gray mobile:hidden">Step 3</p>
          <p className="mobile:hidden">Add-ons</p>
        </Link>
        <Link
          to={MainRoutes.summary}
          className={`${
            (titleData.route === MainRoutes.summary ||
              location.pathname === MainRoutes.thank) &&
            'before:bg-white before:text-black'
          } link before:content-["4"]`}>
          <p className="text-Cool-Gray mobile:hidden">Step 4</p>
          <p className="mobile:hidden">Summary</p>
        </Link>
      </div>
    </div>
  );
}

export default SidePanel;
