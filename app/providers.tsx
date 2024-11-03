"use client";

import { ThemeProvider } from "./theme-provider";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
