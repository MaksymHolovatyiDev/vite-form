import {useData} from '@/Providers/DataProvider';
import {infoLength} from '@/constants/constants';
import {MainRoutes} from '@/environment/MainRoutes';
import {useEffect, useLayoutEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const useDefaultRedirect = () => {
  const navigate = useNavigate();
  const {state} = useData();

  useLayoutEffect(() => {
    if (Object.keys(state.info).length !== infoLength)
      navigate(MainRoutes.Default);
  }, []);

  useEffect(() => {
    if (Object.keys(state.info).length !== infoLength)
      navigate(MainRoutes.Default);
  }, []);
};
