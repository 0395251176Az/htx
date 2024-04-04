import React from "react";

type Props = {
  children: React.ReactNode;
};
export const metadata = {
  title: "About",
};
const layoutAbout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default layoutAbout;
