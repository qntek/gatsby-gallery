import React from "react";
import { Link } from "gatsby";
import galleryLogo from "../assets/images/icons/logo.svg";

const Header = ({ isSlideShow, linkTo }) => {
  linkTo ? (linkTo = linkTo) : (linkTo = "/");
  return (
    <header className="p-4 lg:p-9 border-b border-stone-300">
      <div className="flex flex-row justify-between items-center lg:container lg:mx-auto">
        <Link to="/">
          <img src={galleryLogo} alt="Gallery Logo" />
        </Link>
        <Link to={linkTo}>
          <button className="appearance-none bg-transparent font-bold border-none text-stone-500 text-sm tracking-widest">
            {isSlideShow ? "Stop SlideShow" : "Start SlideShow"}
          </button>
        </Link>{" "}
      </div>
    </header>
  );
};

export default Header;
