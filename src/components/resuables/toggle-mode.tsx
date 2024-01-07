"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          SUN
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          MOON
        </Button>
      )}
    </div>
  );
}
