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
      <div class="flex">
        <SideBar />
        <main class="w-3/5">
          <Navbar />
          <About id="about" />
          <Fade bottom>
            <Works id="works" />
          </Fade>
          <Fade bottom>
            <Certifications />
          </Fade>
          <Fade bottom>
            <Contact />
          </Fade>
        </main>
      </div>
    </>
  );
};

export default Wrapper;

{
  /*
#9DECF9 - Sky Blue
#A0AEC0 - Bright gray
*/
}

{
  /*  
const [showModal, setShowModal] = useState(false);
            
            <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(false)}>
        Close
        </button>
         */
}
