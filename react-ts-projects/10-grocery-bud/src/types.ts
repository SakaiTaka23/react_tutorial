export enum AlertValue {
  CLEAR = 'item cleared',
  CREATE = 'item created',
  DELETE = 'item deleted',
  EDIT = 'item edited',
}

export type item = {
  id: string;
  title: string;
};

export type GroceryContextType = {
  alert: boolean;
  alertMessage: string;
  list: item[];
  addList: (item: string) => void;
  clearList: () => void;
  deleteList: (id: string) => void;
  showAlert: (action: AlertValue) => void;
};
