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
    title: "Trang Chủ",
    url: "/",
  },
  {
    id: 2,
    title: "Chúng Tôi",
    url: "/about",
  },
  {
    id: 3,
    title: "Nông Nghiệp",
    url: "/sanpham",
  },
  {
    id: 4,
    title: "Từ Thiện",
    url: "/tuthien",
  },
  {
    id: 5,
    title: "Tin Tức",
    url: "/blog",
  },
  {
    id: 6,
    title: "Liên Hệ",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 z-50 m-auto mt-1 max-w-full border-b-[1px] bg-primary-foreground  p-4  px-10 md:px-40 ">
      {/* flex items-center justify-between */}
      <div className="relative grid grid-cols-5 items-center justify-between  ">
        <div className="col-span-4 flex justify-self-start md:col-span-1">
          <LogoGreen />
        </div>
        <ul className="hidden items-center justify-center gap-10 md:col-span-3 md:flex ">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.url}
                className="relative text-lg font-medium transition-all hover:text-gray-400 "
              >
                {link.url === pathName && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className={`absolute left-0 top-full h-[1px] w-full bg-primary`}
                  />
                )}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="col-span-1 flex justify-self-end ">
          <div className=" col-span-1 flex items-center gap-2">
            <div className="hidden md:flex">
              <Search placeholder={"Search..."} />
            </div>
            <div className="hidden md:flex">
              <ModeToggle />
            </div>
          </div>
          <div className="flex items-end md:hidden ">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
