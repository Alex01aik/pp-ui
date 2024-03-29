import { useContext } from "react";
import { ThemeContextType } from "./types/ThemeContextType";
import { ThemeContext } from "./ThemeProvider";

export const useTheme = (): ThemeContextType<any> => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
