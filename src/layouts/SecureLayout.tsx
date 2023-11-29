import React from "react";

interface SecureLayoutProps {
  children: React.ReactNode;
}
function SecureLayout({ children }: SecureLayoutProps) {
  return <>{children}</>;
}

export default SecureLayout;
