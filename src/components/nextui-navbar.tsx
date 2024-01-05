"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FiGithub } from "react-icons/fi";
import { Chip } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NextNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Privay & Policy"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b h-20">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="text-2xl font-bold leading-tight tracking-tighter"
          >
            Convertify <span className="text-indigo-500">X</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className={cn("hidden sm:flex gap-6 text-muted-foreground")}
        justify="center"
      >
        <NavbarItem isActive>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/privacy-policy">Privacy & Policy</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Chip
            size="lg"
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white text-sm flex items-center justify-center",
            }}
          >
            <Link
              href="https://github.com/Md-Zainulabdin/File-Converter"
              target="_blank"
              className="text-white text-sm hidden sm:flex"
            >
              Explore Github
            </Link>
            <Link
              href="https://github.com/Md-Zainulabdin/File-Converter"
              target="_blank"
              className="text-white text-sm sm:hidden"
            >
              <FiGithub className="w-4 h-4" />
            </Link>
          </Chip>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="space-y-3 mt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-muted-foreground"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
