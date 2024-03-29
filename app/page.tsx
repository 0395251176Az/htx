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
import React, { useState, useEffect } from "react";
const images = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
];

const dataSections = [
  {
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
  {
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
  {
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổI khí hậu",
    image: "/assets/section/Picture1.png",
    description:
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật....",
  },
  {
    title: "Sức mạnh chữa lành của thiên nhiên",
    image: "/assets/section/Picture2.png",
    description:
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của....",
  },
];

const dataHtx = [
  {
    id: 1,
    name: "Nguyen Van A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum labore aliquid magnam ratione ad, quis, placeat soluta ipsa",
    image: "/assets/htx/1.jpg",
  },
  {
    id: 2,
    name: "Nguyen Van A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum labore aliquid magnam ratione ad, quis, placeat soluta ipsa",
    image: "/assets/htx/1.jpg",
  },
  {
    id: 3,
    name: "Nguyen Van A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum labore aliquid magnam ratione ad, quis, placeat soluta ipsa",
    image: "/assets/htx/1.jpg",
  },
  {
    id: 4,
    name: "Nguyen Van A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum labore aliquid magnam ratione ad, quis, placeat soluta ipsa",
    image: "/assets/htx/1.jpg",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentIndexImg] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndexImg((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setNextImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div className="bg-[#FFFCF4] dark:bg-background pb-10">
        <div className="max-w-screen-lg m-auto  p-2 px-4 flex gap-3  relative">
          <div className="md:flex m-auto items-center justify-center  gap-2">
            <div className="p-2 w-full bg-lime-200 rounded-xl my-2">
              <Image
                src={images[currentImageIndex]}
                alt="Slideshow"
                height={400}
                width={1920}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="rounded-xl  p-2 w-full bg-lime-200 ">
              <Image
                src={images[nextImageIndex]}
                alt="Slideshow"
                height={400}
                width={1920}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 p-4">
          <Carousel className="max-w-screen-lg w-full ">
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
                        className="w-full h-72 rounded-md scale-y-75 -translate-y-10"
                      ></Image>
                      <CardContent className="flex items-center -translate-y-14 ">
                        <div className="space-y-4">
                          <CardTitle>{data.title}</CardTitle>
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
          <div className="p-4 flex items-center justify-center ">
            <CardTitle>Thành viên hợp tác xã</CardTitle>
          </div>
          <div className="container max-w-screen-xl  p-10">
            <div className=" m-auto w-full flex gap-5 flex-wrap justify-center">
              {dataHtx.map((data) => (
                <Card className="w-[475px] flex" key={data.id}>
                  <Image
                    src={data.image}
                    width={300}
                    height={600}
                    alt=""
                    className="w-2/5 h-full rounded-xl"
                  ></Image>
                  <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <CardContent>engineer</CardContent>
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
