export interface SelectedCardItemType {
  card: string;
  price: number;
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
}

export interface ContextValue {
  state: {info: any; plan: any; addons: any};
  dispatch: (data: {type: string; payload: any}) => void;
}

export interface InfoValues {
  name: string;
  email: string;
  tel: string;
}
