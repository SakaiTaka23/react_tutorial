export type item = {
  id: string;
  title: string;
};

export type GroceryContextType = {
  list: item[];
  addList: (item: string) => void;
  clearList: () => void;
};
