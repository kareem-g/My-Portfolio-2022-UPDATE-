import React from "react";
import Fade from "react-reveal/Fade";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ showMenu, active }) => {
  return (
    <>
      <ul
        className={
          active
            ? "flex flex-col items-center justify-center fixed inset-0 backdrop-blur-lg z-40 text-[#A0AEC0] bg-black/90 capitalize overflow-hidden tracking-[.10rem] text-lg font-Poppin p-8 gap-8  lg:hidden"
            : "hidden"
        }
      >
        <div className="flex justify-center items-center inset-0 cursor-pointer">
          <AiOutlineClose
            onClick={showMenu}
            className="transition ease-out mr-7 hover:scale-75"
            size="24px"
          />
        </div>

        <Fade top>
          <li className="pr-6 hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
            <a href="#about">about</a>
          </li>

          <li className="pr-6 hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
            <a href="#works">Works</a>
          </li>

          <li className="pr-6 hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
            <a href="#experiance">Experiance</a>
          </li>

          <li className="pr-6 hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
            <a href="#contact">Contact</a>
          </li>
        </Fade>
      </ul>
    </>
  );
};

export default MenuItems;
