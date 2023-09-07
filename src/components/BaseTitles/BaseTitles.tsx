import {getData} from '@/constants/constants';
import {useLocation} from 'react-router-dom';

function BaseTitles({children}: {children: React.ReactNode}) {
  const location = useLocation();
  const titleData = getData(location.pathname);
  return (
    <div className="base-container">
      <p className="main-title mb-2">{titleData.title}</p>
      <p className="text-Cool-Gray mb-8">{titleData.actions}</p>
      {children}
    </div>
  );
}

export default BaseTitles;
