import Header from "@/components/Header";
import React from "react";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
function GeneralLayout({ children }: GeneralLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default GeneralLayout;
