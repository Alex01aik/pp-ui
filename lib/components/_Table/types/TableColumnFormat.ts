export type TableColumnFormat = {
  _key: string;
  title?: (title: string) => React.ReactNode;
  value?: (value: any, toggleShowAdditionRow: () => boolean) => React.ReactNode;
};
