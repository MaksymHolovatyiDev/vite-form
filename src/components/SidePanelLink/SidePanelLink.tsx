import {SidePanelLinkInterface} from '@/Types';
import {getData} from '@/constants/constants';
import {MainRoutes} from '@/environment/MainRoutes';
import {Link, useLocation} from 'react-router-dom';

function SidePanelLink({data, idx}: SidePanelLinkInterface) {
  const location = useLocation();
  const titleData = getData[location.pathname as keyof typeof getData]
    ? getData[location.pathname as keyof typeof getData]
    : getData[MainRoutes.Default];

  return (
    <Link
      to={data.route}
      className={`${
        titleData.route === data.route && 'before:bg-white before:text-black'
      } link before:content-["${idx + 1}"]`}>
      <p className="text-Cool-Gray mobile:hidden">Step {idx}</p>
      <p className="mobile:hidden">{data.text}</p>
    </Link>
  );
}

export default SidePanelLink;
