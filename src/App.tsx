import { FC } from "react";
import { ThemeProvider } from "@/components";
import Layout from "./components/Layout";
import { Theme } from "@/components/_Theme/types/Theme";
import { Button } from "../dist/components";

const App: FC = () => {
  console.log(Button);
  return (
    <ThemeProvider themeKeys={Theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
