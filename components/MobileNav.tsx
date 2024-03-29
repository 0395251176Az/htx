import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { ModeToggle } from "./darkmode";
import { cn } from "@/lib/utils";
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
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="max-w-64">
        <SheetHeader>
          <SheetTitle>
            <div className="image relative flex items-center gap-2 justify-center">
              <Image src={"/logo.png"} width={40} height={40} alt="" />
              <span className="text-[hsl(143,54%,64%)] font-sans font-semibold text-xl ">
                GreenFarm
              </span>
            </div>
            <div className="text-end pt-2">
              <ModeToggle />
            </div>
          </SheetTitle>

          <SheetDescription className="flex justify-center items-center">
            <ul className="pt-4 flex flex-col gap-2">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    "text-lg font-medium",
                    "hover:text-gray-600 hover:border-b-2 transition-all"
                  )}
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
