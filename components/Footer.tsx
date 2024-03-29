import React from "react";
import LogoGreen from "./LogoGreen";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center justify-center gap-2 py-5 bg-[#a8ffb6]">
      <p>&copy; {new Date().getFullYear()}</p>
      <LogoGreen />
    </footer>
  );
};

export default Footer;
