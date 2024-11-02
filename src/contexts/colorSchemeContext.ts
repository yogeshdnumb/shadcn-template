import { colorSchemeType } from "@/types";
import { createContext } from "react";

type colorSchemeContextType = {
  colorScheme: colorSchemeType;
  setColorScheme: (colorScheme: colorSchemeType) => void;
};

export const colorSchemeContext = createContext<colorSchemeContextType>({
  colorScheme: "system",
  setColorScheme: () => null,
});
