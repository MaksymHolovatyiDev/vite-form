export interface SelectedCardItem {
  card: {text: string; price: {year: number; month: number}};
  selected: boolean;
  billing: boolean;
}

export interface AddonsPick {
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

export interface FinishAddonsItems {
  data: string;
  setTotalPrice: (callback: (price: number) => number) => void;
}

export interface PersonalInfoWrapper {
  name: string;
  text: string;
  required: string[];
}

export interface SelectButton {
  isSubmitting?: any;
  routeForward?: string;
  routeBackward?: string;
  end?: boolean;
}

export interface SidePanelNavigation {
  data: {
    text: string;
    route: string;
  };
  idx: number;
}
