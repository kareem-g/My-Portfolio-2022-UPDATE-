import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

const Works = () => {
  return (
    <>
      <div
        //  className="flex flex-col h-screen p-10"
        id="works"
        className="works"
      >
        <h1 className="text-4xl text-[#FFF] font-black capitalize">
          Case Studies & Projects
        </h1>
        <Fade top>
          <ProjectCard
            name="E-commerce App"
            number="01"
            type="Coming Soon"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
            img="https://i.postimg.cc/gkjcpqH9/screencapture-zamazor-app-vercel-app-2022-06-19-22-20-10.png"
            url="https://zamazor-app.vercel.app/"
          />
          <ProjectCard
            name="EgyFaucet"
            number="02"
            type="Freelancing"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
            img="https://nafezly-production.s3.eu-west-3.amazonaws.com/uploads/portfolios/20452_61f008662b2c3-1643120742.jpg"
            url="http://www.egyfaucet.com/"
          />
          <ProjectCard
            name="Secunix"
            number="03"
            type="Freelancing"
            description="Secunix is an advanced web applications scanner, that helps you identifying the vulnerabilities in your applications before hackers do.
            "
            img="https://i.postimg.cc/TwnLrjHN/Screenshot-from-2022-06-19-22-13-50.png"
            url="https://secunix-v2.vercel.app/"
          />
          <ProjectCard
            name="Crypto Currency Tracker"
            number="04"
            type="Case Study"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
            img="https://i.postimg.cc/LX8wPvX2/screencapture-crypto-currency-api-reactjs-nextjs-coingecko-api-vercel-app-2022-06-19-22-22-30.png"
            url="https://crypto-currency-api-reactjs-nextjs-coingecko-api.vercel.app/"
          />
        </Fade>
      </div>
    </>
  );
};

export default Works;
