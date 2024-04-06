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
    title: "Liên Lạc",
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
            <div className="image relative flex items-center justify-center gap-2">
              <LogoGreen />
            </div>
            <div className="pt-2 text-end">
              <ModeToggle />
            </div>
          </SheetTitle>

          <SheetDescription className="flex items-center justify-center">
            <ul className="flex flex-col gap-2 pt-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    "text-lg font-medium",
                    "transition-all hover:border-b-2 hover:text-gray-600",
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
