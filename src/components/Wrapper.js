import About from "./About";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import Works from "./Works";

import Fade from "react-reveal/Fade";

const Wrapper = () => {
  return (
    <>
      <div className="max-w-full flex flex-wrap">
        <SideBar />
        <main className="flex-auto w-3/5">
          <Navbar />
          <About id="about" />
          <Fade bottom>
            <Works id="works" />
          </Fade>
          <Fade bottom>
            <Certifications id="certifications" />
          </Fade>
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Wrapper;
