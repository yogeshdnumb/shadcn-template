import { colorSchemeContext } from "@/contexts/colorSchemeContext";
import { colorSchemeType } from "@/types";
import { useEffect, useState } from "react";

export default function ColorSchemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<colorSchemeType>(
    () => (localStorage.getItem("color-scheme") as colorSchemeType) || "system"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (colorScheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(colorScheme);
  }, [colorScheme]);
  return (
    <colorSchemeContext.Provider
      value={{
        colorScheme,
        setColorScheme: (colorScheme) => {
          setColorScheme(colorScheme);
          localStorage.setItem("color-scheme", colorScheme);
        },
      }}
    >
      {children}
    </colorSchemeContext.Provider>
  );
}
