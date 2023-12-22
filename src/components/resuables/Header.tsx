"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "@/assets/images/logo-main.png";
import { ModeToggle } from "./toggle-mode";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function Header() {
  const router = useRouter();
  const user = useSelector((state: any) => state.user);

  return (
    <header className="flex justify-between items-center p-3 border-b-[1px] overflow-auto">
      <Image
        onClick={() => {
          //   naviga
          return router.push("/");
        }}
        className="cursor-pointer"
        src={HeaderLogo}
        width={200}
        alt="Tonic Task"
      />
      <div className="flex justify-center items-center gap-3">
        <Button>Sign up</Button>
        <Button variant="secondary">Login</Button>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
