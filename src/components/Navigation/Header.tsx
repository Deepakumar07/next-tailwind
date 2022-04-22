import { NextPage } from "next";
import Image from "next/image";
import logo from "assets/Img/Header/logo.png";
const Header: NextPage = () => {
  return (
    <div className="header">
      <div className="flex items-center w-full ">
        <div className="flex items-center w-[30%] justify-start text-sm md:text-base">
          <Image width={50} height={50} src={logo} alt="logo" layout="fixed" />
          <h2 className="pl-3">gooey</h2>
        </div>
        <div className="w-[40%] text-xs md:text-sm">
          <ul className="flex items-center justify-between ">
            <li className="p-1 md:p2 lg:px-4 lg:py-2 hover:bg-primary rounded">
              <h3>Products</h3>
            </li>
            <li className="p-1 md:p2 lg:px-4 lg:py-2 hover:bg-primary rounded">
              <h3>Our Games</h3>
            </li>
            <li className="p-1 md:p2 lg:px-4 lg:py-2 hover:bg-primary rounded">
              <h3>Company</h3>
            </li>
            <li className="p-1 md:p2 lg:px-4 lg:py-2 hover:bg-primary rounded">
              <h3>Pricing</h3>
            </li>
          </ul>
        </div>
        <div className="w-[30%] text-xs md:text-sm">
          <ul className="flex items-center justify-end ">
            <li className="p-1 md:p2 lg:px-4 lg:py-2  hover:bg-primary rounded">
              <h3>Sign up</h3>
            </li>
            <li className="pl-2">
              <button className="btn-primary">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
