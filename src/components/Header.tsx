"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "@/assets/images/logo-main.png";

function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center py-3 border-b-[1px]">
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
        <button className="bg-black px-10 py-2 text-white rounded shadow-xl hover:shadow-2xl hover:bg-slate-700 transition-colors">
          Sign up
        </button>
        <button className="bg-slate-100 py-2 px-10 text-black rounded transition-colors hover:bg-slate-200">
          Log in
        </button>
      </div>
    </header>
  );
}

export default Header;
