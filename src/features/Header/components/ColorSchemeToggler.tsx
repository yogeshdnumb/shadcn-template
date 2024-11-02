import useColorScheme from "@/hooks/useColorScheme";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LucideSun, LucideMoonStar, LucideMonitor } from "lucide-react";
import ColorSchemeIcon from "./ColorSchemeIcon";
import { Button } from "@/components/ui/button";

export default function ColorSchemeToggler() {
  const { setColorScheme, colorScheme } = useColorScheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" ">
        <Button asChild variant={"ghost"} size={"icon"}>
          <ColorSchemeIcon colorScheme={colorScheme} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setColorScheme("light")}>
          <LucideSun />
          <p>light</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("dark")}>
          <LucideMoonStar />
          <p>dark</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("system")}>
          <LucideMonitor />
          <p>system</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
