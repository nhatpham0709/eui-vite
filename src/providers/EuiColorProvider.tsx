import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";
import "@elastic/eui/dist/eui_theme_light.css";



export const EuiColorProvider = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useTheme();


  return (
    <EuiProvider colorMode={colorMode}>
      <EuiThemeProvider colorMode={colorMode}>{children}</EuiThemeProvider>
    </EuiProvider>
  );
};
