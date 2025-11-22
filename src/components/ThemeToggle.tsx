"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  {/*const { setTheme } = useTheme();*/}
  const { theme, setTheme } = useTheme();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/*<DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-accent hover:!text-primary focus:hover:!text-primary transition-colors">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-accent hover:!text-primary focus:hover:!text-primary transition-colors">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-accent hover:!text-primary focus:hover:!text-primary transition-colors">
          System
        </DropdownMenuItem>*/}
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center justify-between transition-colors
            ${theme === "light" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}
          `}
        >
          Light
          {theme === "light" && <span>✓</span>}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center justify-between transition-colors
            ${theme === "dark" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}
          `}
        >
          Dark
          {theme === "dark" && <span>✓</span>}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center justify-between transition-colors
            ${theme === "system" ? "bg-accent text-primary font-medium" : "hover:bg-accent"}
          `}
        >
          System
          {theme === "system" && <span>✓</span>}
        </DropdownMenuItem>



      </DropdownMenuContent>
    </DropdownMenu>
  );
}
