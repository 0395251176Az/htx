"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
// const form = useForm<z.infer<typeof FormSchema>>({
//   resolver: zodResolver(FormSchema),
//   defaultValues: {
//     username: "",
//   },
// });

function onSubmit(data: z.infer<typeof FormSchema>) {
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
}
const contact = () => {
  return (
    <div className=" z-10 bg-gradient-to-t from-green-200 pb-20">
      <div className="container relative max-w-screen-xl px-20">
        <div className=" flex flex-col items-center">
          <div className=" relative flex h-32 w-32 flex-col items-center">
            <Image
              src={"/assets/green/logo1.jpg"}
              alt=""
              fill={true}
              className="relative h-32 w-32 scale-90 rounded-full object-cover p-2"
            />
          </div>
        </div>
        <div className="mt-4 grid items-center justify-center gap-20 sm:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <div>
              <video
                autoPlay
                muted
                loop
                src="./HTX.mp4"
                className="h-full w-full rounded-2xl"
              ></video>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 xl:col-span-2">
            <h1 className="text-4xl text-[hsl(143,54%,64%)]">
              Liên hệ Green Farm!
            </h1>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 sm:w-5/6 xl:w-4/5"
            >
              <Input placeholder="Username..." />
              <Input placeholder="Title..." />
              <Textarea placeholder="Enter your..." className="h-40"></Textarea>
              <Button type="submit" size={"lg"}>
                Gửi Ngay
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
