const Wrapper = () => {
  return <>
  <div class="flex">
      <aside class="w-2/5 sticky left-0 top-0 h-screen p-4">
          <h1 class="text-white text-2xl border border-1 border-green w-14 h-14">Logo</h1>

          <div className="m-6">
          <h3 className="font-extrabold text-[#A0AEC0] text-sm">A Little About Me...</h3>

            <div className="font-black uppercase mt-6">
              <span className="text-[#FFF] text-4xl tracking-[.24rem] font-Roboto">kareem</span>
              <br />
              <span className="text-[#9DECF9] text-[2.80rem] tracking-[.50rem] font-Roboto">gameel.</span>
              <br />
              <span className="text-[#9DECF9] text-base">web developer</span>
            </div>

            <div className="mt-6 text-[#A0AEC0] font-normal text-sm leading-relaxed flex flex-col space-y-4 tracking-normal">
            <span>
              Hey gang, my name's Kareem and since a young age  <br/>
              I've had an obsession for nearly anything tech-related.  <br/>
              I've been coding since about the age of 14 (phew!)  <br/>
              and work as a Front End React developer.
            </span>


            <span>
              My specialities mainly gravitate around one central language <br/>
              (and my first love) - JavaScript. I've been programming with it  <br/>
              for around 2 years and - as with any long-term relationship - <br/>
              have had the pleasure of seeing it's ugly side as well as it's <br/>
              beautiful side. So I know the pitfalls to avoid when using it.
            </span>

            <br />
            <span>
              Other languages & technologies I use and teach are -
              TypeScript <span className="text-[#9DECF9]">(in Progress)</span>, JavaScript (Es6), React, Nextjs, HTML & S<span className="text-[#9DECF9]">(</span>CSS<span className="text-[#9DECF9]">)</span>.
            </span>

            </div>
          </div>
      </aside>

      {/*
      #9DECF9 - Sky Blue
      #A0AEC0 - Bright gray
      */}

      <main class="w-3/5">

      <nav className="flex flex-row-reverse p-6 sticky top-0 left-0 bg-[#121212]/75 w-full">
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

          <div class="h-screen p-4 mt-6 flex flex-row">

          <div className="w-3/5 flex flex-col">
              <h1 class="text-3xl text-[#FFF] font-black uppercase tracking-wide"><span className="text-4xl">W</span>hat i Do.</h1>
                <span className="mt-10 text-[#A0AEC0] font-normal text-sm leading-relaxed tracking-normal">
                    I'm a Front end Developer, I'm always up to learn new technologies <br />
                    to improve myself and get more experience <br />
                    for Extremely Fast, High-quality & Best performance Websites.
                  </span>

                  <span className="mt-10 text-[#A0AEC0] font-normal text-sm font-bold leading-relaxed tracking-normal ">
                    Languages and Technologies that i use
                  </span>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                  <span>TS
                      <span className="ml-2 text-white">
                      TypeScript
                      </span>
                  </span>

                  <span>TS
                      <span className="ml-2 text-white">
                      TypeScript
                      </span>
                  </span>

                  <span>TS
                      <span className="ml-2 text-white">
                      TypeScript
                      </span>
                  </span>

                  <span>TS
                      <span className="ml-2 text-white">
                      TypeScript
                      </span>
                  </span>


                  </div>

          </div>

          <div className="w-2/5 pl-6">
          <img class="mx-auto rounded-full" src="https://picsum.photos/id/1/250/250" alt="screenshot"/>
          </div>

          </div>


          <div class="h-screen p-10">
              <h1 class="text-4xl text-[#FFF] font-black uppercase">What i Do.</h1>
          </div>
      </main>
  </div>
</>
}

export default Wrapper;
