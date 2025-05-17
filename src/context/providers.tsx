"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { CartProvider } from "./cartContext";
import { CurrencyProvider } from "./currencyContext";
import { NotFoundProvider } from "./NotFoundContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotFoundProvider>
      <ThemeProvider>
        <CurrencyProvider>
          <CartProvider>{children}</CartProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </NotFoundProvider>
  );
}
