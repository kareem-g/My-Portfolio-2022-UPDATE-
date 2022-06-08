import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

const Navbar = () => {
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
      <Fade top cascade>
        <nav
          className={`transition ease-in-out delay-150 flex flex-row-reverse mt-16 ${
            show &&
            "transition ease-in-out delay-150 p-6 sticky top-0 bg-[#121212]-75 left-0 w-full"
          }`}
        >
          <ul className="flex mr-8 text-[#A0AEC0] capitalize tracking-[.10rem] text-sm font-Poppin">
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
          </ul>
        </nav>
        ;
      </Fade>
    </>
  );
};

export default Navbar;
