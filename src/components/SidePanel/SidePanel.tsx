import {getData} from '@/constants/constants';
import {MainRoutes} from '@/environment/variables';
import {Link, useLocation} from 'react-router-dom';

function SidePanel() {
  const location = useLocation();
  const titleData = getData(location.pathname);

  return (
    <div className="bg-bg-desktop bg-no-repeat bg-cover bg-center flex justify-center items-start w-1/4 h-full rounded-lg pt-6">
      <div className="flex  flex-col justify-start items-start gap-4">
        <Link
          to={MainRoutes.default}
          className={`${
            titleData.route === MainRoutes.default &&
            'before:bg-white before:text-black'
          } link before:content-["1"]`}>
          <p className="text-Cool-Gray">Step 1</p>
          <p>Your Info</p>
        </Link>
        <Link
          to={MainRoutes.plan}
          className={`${
            titleData.route === MainRoutes.plan &&
            'before:bg-white before:text-black'
          } link before:content-["2"]`}>
          <p className="text-Cool-Gray">Step 2</p>
          <p>Select Plan</p>
        </Link>
        <Link
          to={MainRoutes.addons}
          className={`${
            titleData.route === MainRoutes.addons &&
            'before:bg-white before:text-black'
          } link before:content-["3"]`}>
          <p className="text-Cool-Gray">Step 3</p>
          <p>Add-ons</p>
        </Link>
        <Link
          to={MainRoutes.summary}
          className={`${
            titleData.route === MainRoutes.summary &&
            'before:bg-white before:text-black'
          } link before:content-["4"]`}>
          <p className="text-Cool-Gray">Step 4</p>
          <p>Summary</p>
        </Link>
      </div>
    </div>
  );
}

export default SidePanel;
