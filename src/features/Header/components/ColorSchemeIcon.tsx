import { colorSchemeType } from "@/types";
import { LucideMoonStar, LucideSun } from "lucide-react";

export default function ColorSchemeIcon({
  colorScheme,
}: {
  colorScheme: colorSchemeType;
}) {
  if (colorScheme === "light") {
    return <LucideSun />;
  } else if (colorScheme === "dark") {
    return <LucideMoonStar />;
  } else {
    if (colorScheme === "system") {
      const systemColorScheme: colorSchemeType = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
      if (systemColorScheme === "light") {
        return <LucideSun />;
      } else if (systemColorScheme === "dark") {
        return <LucideMoonStar />;
      }
    }
  }
}
