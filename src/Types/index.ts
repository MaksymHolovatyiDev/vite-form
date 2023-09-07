export interface SelectedCardItemType {
  card: {text: string; price: {year: number; month: number}};
  selected: boolean;
  billing: boolean;
}

export interface addonsPickInterface {
  data: {
    text: string;
    price: {
      year: number;
      month: number;
    };
    description: string;
  };
  billing: boolean | undefined;
  value: boolean;
}

export interface ContextValue {
  state: {info: any; plan: any; addons: any; summary: {price: number}};
  dispatch: (data: {type: string; payload: any}) => void;
}

export interface InfoValues {
  name: string;
  email: string;
  tel: string;
}

export interface FinishAddonsItemsType {
  data: string;
  setTotalPrice: (callback: (price: number) => number) => void;
}

export interface FinishType {
  setThank: (data: boolean) => void;
}
