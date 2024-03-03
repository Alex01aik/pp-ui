export type ThemeContextType<T> = {
  changeTheme?: (key: string | T) => void;
  theme?: string | T;
};
