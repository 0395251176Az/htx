import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMapPinUserFill, RiTimeLine, RiSearchLine } from "react-icons/ri";
const id = [
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
  {
    id: 3,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    date: "January 23 2022",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật. Đứng trước những dự đoán về hậu quả của Biến đổi khí hậu, việc bảo vệ sự đa dạng sinh học này thực sự là một nhiệm vụ cấp bách...",
    img: "/assets/section/Picture3.jpg",
  },
  {
    id: 4,
    title: "Sức mạnh chữa lành của thiên nhiên",
    date: "January 23 2022",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của các loài chim là kho báu tự nhiên mà ai cần phải trải nghiệm ít nhất một lần trong đời..",
    img: "/assets/section/Picture4.jpg",
  },
];
export default function page() {
  return (
    <div className="h-full max-w-full">
      {id.map((link) => (
        <div
          key={link.id}
          className="mb-14 max-w-2xl rounded-md p-4 odd:bg-gray-50 odd:dark:bg-primary-foreground"
        >
          <div className="relative h-full">
            <Image
              src={link.img}
              alt=""
              width={500}
              height={200}
              className="w-full rounded-sm object-cover transition hover:scale-105 hover:bg-indigo-500 hover:shadow-sm hover:shadow-slate-300 "
            />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <h2 className="font-medium opacity-70">Environment</h2>
            <Link
              href={`/blog/${link.id}`}
              className="text-xl font-bold hover:text-blue-600"
            >
              {link.title}
            </Link>
            <div className="flex flex-row items-center">
              <h4 className="flex flex-row items-center gap-3 text-lg">
                <RiTimeLine />
                <p>
                  {new Date().getDate()}/{new Date().getMonth()}/
                  {new Date().getFullYear()}
                </p>
              </h4>
            </div>
          </div>
          <p>{link.description}</p>
        </div>
      ))}
    </div>
  );
}
