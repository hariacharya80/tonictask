import Header from "@/components/resuables/Header";
import { ThemeProvider } from "@/components/resuables/theme-provider";
import React from "react";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default GeneralLayout;
