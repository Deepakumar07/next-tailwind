import { NextPage } from "next";
import HeaderComp from "./Header";
const NavigationComp: NextPage = ({ children }) => {
  return (
    <div className="relative">
      <HeaderComp />
      <div className="screen-container">{children}</div>
    </div>
  );
};

export default NavigationComp;
