// components/theme-provider.tsx
"use client"; // <--- THIS IS CRUCIAL AND MUST BE THE FIRST LINE

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes"; // Corrected import for types  

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
