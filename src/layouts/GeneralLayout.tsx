import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      {children}
    </ThemeProvider>
  );
}

export default GeneralLayout;
