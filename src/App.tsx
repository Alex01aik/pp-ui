import { FC } from "react";
import { ThemeProvider } from "@/components";
import Layout from "./components/Layout";
import { Theme } from "@/components/_Theme/types/Theme";

const App: FC = () => {
  return (
    <ThemeProvider themeKeys={Theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
