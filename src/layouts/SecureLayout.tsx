import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

interface SecureLayoutProps {
  children: React.ReactNode;
}
function SecureLayout({ children }: SecureLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      {children}
    </ThemeProvider>
  );
}

export default SecureLayout;
