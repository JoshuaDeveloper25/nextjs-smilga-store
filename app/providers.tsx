"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme-provider";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <Toaster />
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
