import { EuiButtonIcon, EuiThemeColorMode } from "@elastic/eui";
import { useTheme } from "../../../hooks/useTheme";

const ThemeSwitcher = () => {
  const { colorMode, setColorMode } = useTheme();
  const isDarkTheme = colorMode === "dark";

  const handleChangeTheme = (newTheme: EuiThemeColorMode) => {
    setColorMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <EuiButtonIcon
      iconType={isDarkTheme ? "sun" : "moon"}
      aria-label="Change theme"
      onClick={() => handleChangeTheme(isDarkTheme ? "light" : "dark")}
    ></EuiButtonIcon>
  );
};

export default ThemeSwitcher;
