import { createContext, useState, ReactNode, useEffect } from "react";
import { EuiThemeColorMode } from "@elastic/eui";

const defaultTheme: EuiThemeColorMode = "light";

const getTheme = (): EuiThemeColorMode => {
  const storedTheme = localStorage.getItem("theme") as EuiThemeColorMode;
  return storedTheme || defaultTheme;
};

export const ThemeContext = createContext<{
  colorMode: EuiThemeColorMode;
  setColorMode: (colorMode: EuiThemeColorMode) => void;
}>({
  colorMode: defaultTheme,
  setColorMode: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState(getTheme());

  useEffect(() => {
    const existingLink = document.head.querySelector(
      '[href="/theme/dark.css"]'
    ) as HTMLLinkElement | null;
  
    if (existingLink) {
      existingLink.disabled = colorMode === "light";
    } else if (colorMode === "dark") {
      const themeLink = document.createElement("link");
      themeLink.rel = "stylesheet";
      themeLink.href = "/theme/dark.css";
      document.head.appendChild(themeLink);
  
      return () => {
        themeLink.disabled = true;
      };
    }
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
