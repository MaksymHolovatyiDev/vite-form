import {ContextValue} from '@/Types';
import {cards} from '@/constants/constants';
import {createContext, useContext, ReactNode, useReducer} from 'react';

const initialState = {
  info: {},
  plan: {
    plan: cards[0].text.split('bg-')[1],
  },
  addons: {},
  summary: {price: 0},
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setPrice':
      return {
        ...state,
        summary: {
          price: action.payload,
        },
      };
    default:
      return {
        ...state,
        [action.type]: {...action.payload},
      };
  }
};

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
