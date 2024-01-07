import React from "react";
import { ThemeProvider } from "@/components/resuables/theme-provider";
import Header from "@/components/resuables/Header";
import SideBar, { SidebarItem } from "@/components/side-bar/SideBar";
import { Boxes } from "lucide-react";

interface SecureLayoutProps {
  children: React.ReactNode;
}
function SecureLayout({ children }: SecureLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />

      <section className="flex gap-2">
        <SideBar>
          <SidebarItem icon={<Boxes size={20} />} text={"Staistics"} active />
          <SidebarItem icon={<Boxes size={20} />} text={"Staistics"} />
          <SidebarItem icon={<Boxes size={20} />} text={"Staistics"} alert />
          <SidebarItem icon={<Boxes size={20} />} text={"Staistics"} />
        </SideBar>
        <div className="flex flex-col max-w-screen-xl w-full px-6 gap-y-8 mx-auto mt-[5rem]">
          {children}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SecureLayout;
