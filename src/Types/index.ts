export interface SelectedCardItemType{
    card: string;
    price: number;
    selected: boolean;
    billing: boolean;
}

export interface addonsPickInterface{
    data: {
        text: string;
        price: {
            year: number;
            month: number;
        }
        description: string
    },

}