"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { CurrencyProvider } from "./currencyContext";
import { NotFoundProvider } from "./NotFoundContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <CurrencyProvider>
        <NotFoundProvider>{children}</NotFoundProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
