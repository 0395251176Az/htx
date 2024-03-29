import Image from "next/image";
import React from "react";

const LogoGreen = () => {
  return (
    <div className="image relative flex items-center gap-2">
      <Image src={"/assets/icons/logo.png"} width={40} height={40} alt="" />
      <p className="text-[hsl(143,54%,64%)] font-sans font-semibold text-xl ">
        GreenFarm
      </p>
    </div>
  );
};

export default LogoGreen;
