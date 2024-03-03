import { PropsWithChildren, createContext, useState } from "react";
import { ThemeContextType } from "../types/ThemeContextType";
import { Theme } from "../types/Theme";
import "./styles.css";

export const ThemeContext = createContext<ThemeContextType<any> | undefined>(
  undefined
);

export type ThemeProviderProps<T> = PropsWithChildren & {
  themeKeys?: string[] | T;
};

const ThemeProvider = <T,>({
  children,
  themeKeys,
  ...props
}: ThemeProviderProps<T>) => {
  const [theme, setTheme] = useState<string | T>(
    typeof themeKeys === "undefined"
      ? Theme.light
      : Array.isArray(themeKeys)
        ? themeKeys[0]
        : (Object.values(themeKeys as any)?.[0] as T)
  );

  const changeTheme = (key: string | T) => {
    setTheme(key);
  };

  const contextValue: ThemeContextType<T> = {
    changeTheme,
    theme,
  };
  return (
    <ThemeContext.Provider {...props} value={contextValue}>
      <div id="theme" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
