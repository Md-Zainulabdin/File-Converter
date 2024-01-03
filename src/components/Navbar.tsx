import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full h-24 border-b bg-white backdrop-blur-md flex items-center justify-between bg-opacity-30 fixed z-50 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-10">
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          width={100}
          height={100}
          alt="Logo"
          className="w-40"
        />
      </Link>

      <div className="hidden md:flex items-center md:gap-2 lg:gap-4">
        <Link href={"/"}>
          <Button variant={"ghost"} className="text-md font-semibold">
            Home
          </Button>
        </Link>

        <Link href={"/about"}>
          <Button variant={"ghost"} className="text-md font-semibold">
            About
          </Button>
        </Link>

        <Link href={"/privacy-policy"}>
          <Button variant={"ghost"} className="text-md font-semibold">
            Privacy Policy
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-center border px-4 py-1 rounded-full">
        <Link href={"https://github.com/Md-Zainulabdin/File-Converter"}>
          {" "}
          <span>Github Repo</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
