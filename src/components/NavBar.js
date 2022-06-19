import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <Fade right cascade>
        <div className="transition ease-in-out delay-150 absolute right-6 p-8 lg:hidden top-4 scale-110 hover:scale-125 cursor-pointer">
          <AiOutlineMenu
            color="#9DECF9"
            size="32px"
            onClick={showMenu}
            className="scale-110 bg-transparent w-16 hover:scale-125"
          />
        </div>
      </Fade>
      <Fade top cascade>
        <nav
          className={`lg:transition ease-in-out delay-150 mt-16 ${
            show &&
            "transition ease-in-out delay-150 p-6 sticky top-0 bg-[#121212]-75 left-0 w-full"
          }`}
        >
          <ul className="hidden mr-8 text-[#A0AEC0] capitalize tracking-[.10rem] text-sm font-Poppin lg:flex flex-row-reverse">
            <li className="pr-6 cursor-pointer hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
              <Link to="certifications">Certifications</Link>
            </li>

            <li className="pr-6 cursor-pointer hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
              <Link to="about">about</Link>
            </li>

            <li className="pr-6 cursor-pointer hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
              <Link to="works">Works</Link>
            </li>

            <li className="pr-6 cursor-pointer hover:underline decoration-[#9DECF9] decoration-1 underline-offset-3 transition ease-in-out delay-150s hover:-translate-y-1 duration-300">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Fade>

      <Fade top cascade>
        <MenuItems showMenu={showMenu} active={active} />
      </Fade>
    </>
  );
};

export default Navbar;
