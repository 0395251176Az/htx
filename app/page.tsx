"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Description } from "@radix-ui/react-dialog";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const images = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
];

const dataSections = [
  {
    id: 1,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    id: 2,
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
  {
    id: 1,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    id: 2,
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
  {
    id: 1,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    id: 2,
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
];

const dataHtx = [
  {
    id: 1,
    name: "Travel to Ninh Thuận",
    description:
    "Green Farm Ninh Thuận là điểm đến lý tưởng cho những ai yêu thích du lịch sinh thái và nông nghiệp. Với không gian xanh mướt của cây trái, cùng với các hoạt động như thu hoạch, tham gia trại nông.",
    image: "/assets/htx/1.png",
  },
  {
    id: 2,
    name: "Rượu Chuối Bác Ái",
    description:
      "Rượu chuối Bác Ái Ninh Thuận: Hương vị độc đáo, thơm ngon từ chuối chín và thảo mộc địa phương. Chất rượu mềm mại, ngọt dịu, làm ấm cơ thể trong những ngày se lạnh.",
    image: "/assets/htx/3.jpg",
  },
  {
    id: 3,
    name: "Thiên Nhiên Ninh Thuận",
    description:
      "Ninh Thuận là một tỉnh miền trung Việt Nam nổi tiếng với cảnh quan thiên nhiên đẹp mê hồn. Từ những bãi biển dài, cát trắng mịn màng đến những cánh đồng nho bát ngát, và những dãy núi đá vôi hùng vĩ.",
    image: "/assets/htx/2.jpg",
  },
  {
    id: 4,
    name: "Travel to Ninh Thuận",
    description:
      "Với không gian xanh mướt của cây trái, cùng với các hoạt động như thu hoạch, tham gia trại nông, du khách có cơ hội tận hưởng sự gần gũi với thiên nhiên và trải nghiệm cuộc sống nông thôn đích thực.",
    image: "/assets/htx/4.png",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentIndexImg] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndexImg((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
      setNextImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="bg-[#FFFCF4] pb-10 dark:bg-background">
        <div className="relative m-auto  flex max-w-screen-lg gap-3 p-2  px-4">
          <div className="m-auto items-center justify-center gap-2  md:flex">
            <div className="my-2 w-full rounded-xl bg-lime-200 p-2">
              <Image
                src={images[currentImageIndex]}
                alt="Slideshow"
                height={400}
                width={1920}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full  rounded-xl bg-lime-200 p-2 ">
              <Image
                src={images[nextImageIndex]}
                alt="Slideshow"
                height={400}
                width={1920}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center p-4">
          <Carousel className="w-full max-w-screen-lg ">
            <CarouselContent className="">
              {dataSections.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 lg:basis-1/3 "
                >
                  <div className="p-1">
                    <Card className="relative h-[400px]">
                      <Image
                        src={data.image}
                        alt=""
                        width={2000}
                        height={1000}
                        className=" h-72 w-full -translate-y-10 scale-y-75 rounded-md"
                      ></Image>
                      <CardContent className="flex -translate-y-14 items-center ">
                        <div className="space-y-4">
                          <CardTitle>
                            <Link href={`/blog/${data.id}`}>{data.title}</Link>
                          </CardTitle>
                          <CardDescription>{data.description}</CardDescription>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <>
        <main className="mx-auto mt-4 max-w-[540px] sm:max-w-[604px] md:max-w-[720px] lg:max-w-[972px] xl:max-w-full xl:px-12 2xl:max-w-[1400px]">
          <div className="flex items-center justify-center p-4 ">
            <CardTitle>Sản phẩm Green Farm</CardTitle>
          </div>
          <div className="container max-w-screen-xl  p-10">
            <div className=" m-auto flex w-full flex-wrap justify-center gap-5">
              {dataHtx.map((data) => (
                <Card className="flex w-[475px] bg-green-100  items-center" key={data.id}>
                  <Image
                    src={data.image}
                    width={300}
                    height={600}
                    alt=""
                    className="h-52 w-2/5 pl-2 object-cover items-center rounded-xl"
                  ></Image>
                  <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </>
    </>
  );
}
