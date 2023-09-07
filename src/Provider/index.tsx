import {ContextValue} from '@/Types';
import {createContext, useContext, ReactNode, useReducer} from 'react';

const initialState = {
  info: {},
  plan: {},
  addons: {},
};

const reducer = (state: any, action: any) => ({...state, [action.type]: {...action.payload}});


const DataContext = createContext<ContextValue>({} as ContextValue);

export const useData = () => useContext(DataContext);

const DataProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
