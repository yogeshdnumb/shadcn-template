import { colorSchemeContext } from "@/contexts/colorSchemeContext";
import { useContext } from "react";

export default function useColorScheme() {
  const context = useContext(colorSchemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ColorSchemeProvider");
  return context;
}
