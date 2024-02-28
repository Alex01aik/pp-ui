import { PropsWithChildren, useState } from "react";
import "./styles.css";

export type ThemeProviderProps = PropsWithChildren & {};

enum Theme {
  light = "light",
  dark = "dark",
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.dark);
  return (
    <div id="root" data-theme={theme}>
      <button
        onClick={() =>
          setTheme(theme === Theme.light ? Theme.dark : Theme.light)
        }
      >
        test
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;
