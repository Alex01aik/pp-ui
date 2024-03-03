import { Switch } from "@/components";
import { Theme } from "@/components/_Theme/types/Theme";
import { useTheme } from "@/components/_Theme/useTheme";
import { FC } from "react";

const ThemeSwitch: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Switch
        values={Object.values(Theme)}
        value={theme.theme}
        onChange={(value) => {
          theme.changeTheme(value as Theme);
        }}
      />
    </>
  );
};

export default ThemeSwitch;
