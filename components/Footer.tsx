"use client";
import React from "react";
import LogoGreen from "./LogoGreen";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTiktokFill,
} from "react-icons/ri";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { usePathname } from "next/navigation";

type Props = {};
const links = [
  {
    id: 1,
    title: "Trang Chủ",
    url: "/",
  },
  {
    id: 2,
    title: "Tin Tức",
    url: "/blog",
  },
  {
    id: 3,
    title: "Liên Hệ",
    url: "/contact",
  },
  {
    id: 4,
    title: "Chúng Tôi",
    url: "/about",
  },
];
const data = [
  "Hợp tác xã nông nghiệp du lịch greenfarm phước bình",
  "Trụ sở chính: Thôn Gia É, xã Phước Bình, huyện Bác Ái, tỉnh Ninh Thuận Gia E",
];
const Footer = (props: Props) => {
  const pathName = usePathname();
  if (pathName !== "/contact")
    return (
      <footer className="flex flex-col items-center justify-center ">
        <div className="w-full bg-green-50 dark:bg-background">
          <div className="grid justify-center pb-2 pt-6 sm:grid-cols-1 sm:gap-80 sm:px-4 md:grid-cols-5  md:gap-20 xl:px-32">
            <div className="m-auto  space-y-2  text-lg md:col-span-2">
              <div className="flex flex-col gap-2 ">
                <LogoGreen />
                <p className="font-medium text-gray-500">{data[0]}</p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="rounded-full bg-gray-100 p-2">
                  <MapPinIcon className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">{data[1]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-100 p-2">
                  <PhoneIcon className="h-6 w-6 text-gray-500" />
                </div>
                <p className="cursor-pointer font-medium text-blue-600">
                  {" "}
                  84+ 915 734 687
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-100 p-2">
                  <EnvelopeIcon className="h-6 w-6 text-gray-700" />
                </div>
                <p className="font-medium">greenfarminhthuan@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gray-100 p-2">
                  <BsFacebook className="h-6 w-6 text-blue-500" />
                </div>
                <p className="font-medium">facebook.com/htxgreenfarm</p>
              </div>{" "}
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-black p-2">
                  <RiTiktokFill className="h-6 w-6  text-white " />
                </div>
                <p className="font-medium ">
                  https://www.tiktok.com/@phamnhungtca
                </p>
              </div>
            </div>
            <div className="mt-2 md:col-span-1">
              <div className="flex flex-col items-center sm:items-center sm:justify-center">
                <h1 className="text-2xl">Links</h1>
                <div className="flex justify-center gap-4 md:flex-col">
                  {links.map((link) => (
                    <Link href={link.url} key={link.id} className="text-center">
                      {link.title}
                      <hr />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col items-center gap-2">
                <div>
                  <Table>
                    <TableCaption>Opening Hours</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Thứ 2 - Thứ 7</TableCell>
                        <TableCell>08:00 AM - 04:00 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Chủ Nhật</TableCell>
                        <TableCell>07:00 AM - 22:00 AM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <div className="social grid justify-center p-4">
            <ul className="flex gap-2">
              <li>
                <Link href={"/"}>
                  {" "}
                  <RiInstagramLine className="h-8 w-8 rounded-full bg-pink-100 text-pink-500" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <RiFacebookBoxFill className="h-8 w-8 rounded-full bg-blue-100 text-blue-500" />
                </Link>
              </li>{" "}
              <li>
                <Link href={"/"}>
                  <RiTiktokFill className="h-8 w-8 rounded-full bg-gray-100 text-gray-900" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2 border-t-2 p-4">
          <p>
            &copy; <span>Trung E Vương </span> {new Date().getFullYear()}
          </p>
          &copy;
          <LogoGreen />
          <p></p>
        </div>
      </footer>
    );
};

export default Footer;
