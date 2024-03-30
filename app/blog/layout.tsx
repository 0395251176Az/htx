import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const categories = [
  {
    id: 1,
    title: "Environment (2)",
  },
  {
    id: 2,
    title: "Course (1)",
  },
  {
    id: 3,
    title: "Activate (2)",
  },
];
const latestBlog = [
  {
    id: 1,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    date: "January 23 2022",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật. Đứng trước những dự đoán về hậu quả của Biến đổi khí hậu, việc bảo vệ sự đa dạng sinh học này thực sự là một nhiệm vụ cấp bách...",
    img: "/assets/section/Picture1.png",
  },
  {
    id: 2,
    title: "Sức mạnh chữa lành của thiên nhiên",
    date: "January 23 2022",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của các loài chim là kho báu tự nhiên mà ai cần phải trải nghiệm ít nhất một lần trong đời..",
    img: "/assets/section/Picture2.png",
  },
];
export default function Blog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" m-auto flex flex-col bg-muted">
      <div className="m-auto mt-10 flex max-w-screen-xl justify-between gap-20">
        <div className="flex max-w-[800px] flex-col gap-20">{children}</div>
        <div className=" relative hidden w-[400px] flex-col flex-wrap gap-10 px-10 xl:flex">
          <div className="rounded-md bg-background p-5">
            <h1 className="text-xl font-semibold">Categories</h1>
            <div className="flex flex-col gap-2 pt-3">
              {categories.map((link) => (
                <Link
                  href={"/blog"}
                  className="hover:text-blue-700 "
                  key={link.id}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative rounded-sm bg-background p-5">
            <h1 className="text-xl font-semibold">Latest Blog</h1>
            {latestBlog.map((link) => (
              <div
                className="mt-4 flex flex-col items-center gap-4 border-b-[1px] py-4"
                key={link.id}
              >
                <div className="w-92 relative flex flex-row items-center ">
                  <div className="h-20 w-52">
                    <Image
                      src={link.img}
                      width={1000}
                      height={300}
                      alt=""
                      className="h-20 w-32 rounded-sm   hover:hover:scale-110 hover:bg-indigo-500"
                    />
                  </div>
                  <div className="w-2/3">
                    <Link
                      href={`/blog/${link.id}`}
                      className="text-sm font-medium transition hover:scale-105 hover:text-gray-500"
                    >
                      {link.title}
                    </Link>
                  </div>
                </div>
                <p className="opacity-70">25 June, 2020</p>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <Image
              src={"/store-management-1.png"}
              width={300}
              height={400}
              alt=""
              className="rounded-sm"
            />
            <h2 className="p-30 absolute -translate-x-6 -translate-y-20 text-center text-2xl font-semibold text-background">
              How To Implement New Business Strategy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
