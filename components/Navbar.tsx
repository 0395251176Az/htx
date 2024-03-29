"use client";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./darkmode";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Search from "./Search";
import LogoGreen from "./LogoGreen";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="sticky bg-primary-foreground p-2 px-10 md:px-40 max-w-full m-auto mt-4  border-b-[1px]  top-0 z-50 ">
      <div className="flex justify-between items-center ">
        <LogoGreen />
        <ul className="hidden md:flex gap-10 ">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                className="relative hover:text-primary transition-all text-lg font-medium"
              >
                {link.url === pathName && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className={`absolute left-0 top-full h-[1px] bg-primary w-full`}
                  />
                )}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" flex gap-2 items-center">
          <div className="hidden md:flex">
            <Search placeholder={"Search..."} />
          </div>
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
