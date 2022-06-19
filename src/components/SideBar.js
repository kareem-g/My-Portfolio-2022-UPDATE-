import Fade from "react-reveal/Fade";

const SideBar = () => {
  return (
    <>
      <aside
        // className="flex flex-col w-2/5 flex-auto min-w-[300px] self-start sticky left-0 top-0 h-screen p-4"
        className="sidebar"
      >
        {/* <h1 class="text-white text-2xl">K</h1> */}

        <div className="m-6">
          <h3 className="font-extrabold text-[#A0AEC0] text-sm">
            A Little About Me...
          </h3>

          <div className="font-black uppercase mt-6">
            <Fade left cascade>
              <span className="text-[#FFF] text-4xl tracking-[.24rem] font-Roboto">
                kareem
              </span>
              <br />
              <span className="text-[#9DECF9] text-[2.80rem] tracking-[.50rem] font-Roboto">
                gameel.
              </span>
              <br />
              <span className="text-[#9DECF9] text-base">web developer</span>
            </Fade>
          </div>
          <Fade left cascade>
            <div className="mt-6 text-[#A0AEC0] font-normal text-sm leading-relaxed flex flex-col space-y-4 tracking-normal">
              <span>
                Hey gang, my name's Kareem and since a young age <br />
                I've had an obsession for nearly anything tech-related. <br />
                I've been coding since about the age of 14 (phew!) <br />
                and work as a Front End React developer.
              </span>

              <span>
                My specialities mainly gravitate around one central language{" "}
                <br />
                (and my first love) - JavaScript. I've been programming with it{" "}
                <br />
                for around 2 years and - as with any long-term relationship -{" "}
                <br />
                have had the pleasure of seeing it's ugly side as well as it's{" "}
                <br />
                beautiful side. So I know the pitfalls to avoid when using it.
              </span>

              <br />
              <span>
                Other languages & technologies I use and teach are - TypeScript{" "}
                <span className="text-[#9DECF9]">(in Progress)</span>,
                JavaScript (Es6), React, Nextjs, HTML & S
                <span className="text-[#9DECF9]">(</span>CSS
                <span className="text-[#9DECF9]">)</span>.
              </span>
            </div>
          </Fade>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
