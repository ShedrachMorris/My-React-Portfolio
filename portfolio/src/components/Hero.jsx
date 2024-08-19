import { MdOutlineWavingHand } from "react-icons/md";
import { PiFileHtml } from "react-icons/pi";
import { TbFileTypeCss } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import "./Blob.css";
import cv from "../assets/ShedrachMorrisCV.pdf";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap items-center pt-2 ml-2 mt-5 min-[320px]:mt-3 min-[320px]:text-sm min-[320px]:max-w-screen-sm
       min-[768px]:max-w-screen-md min-[1024px]:max-w-screen-lg min-[1280px]:max-w-screen-xl">
        <div className="flex-1 flex-col pt-11 mt-12 flex-wrap min-[320px]:flex">
          <div className="min-[320px]: ">
            <h1 className="inline-flex item-center flex-wrap text-lg 
            min-[320px]:text-sm">
              I am Shedrach Morris Uzoigwe A React Developer,
              <div className="ml-2 inline-flex">
                Hi <MdOutlineWavingHand className="text-yellow-500 text-2xl" />
              </div>
            </h1>
          </div>

          <div>
            <div className="inline-flex item-center flex-wrap text-lg mt-10 sm:flex-col-2">
              <div className="inline-flex">
                <span className="text-lg">Tech Stack :</span>{" "}
                <PiFileHtml className="text-red-500 text-4xl ml-5" />
                <TbFileTypeCss className="text-blue-500 text-4xl" />
                <RiJavascriptFill className="text-4xl text-yellow-800 ml-5" />
              </div>
              <div className="inline-flex ml-6">
                <RiTailwindCssLine className="text-4xl text-red-400" />
                <IoLogoReact className="text-4xl text-blue-400" />
              </div>
            </div>
          </div>

          <div className="inline-flex mt-10 flex-col">
            <h2 className="text-lg">Let{"'"}s Connect</h2>
            <div className="inline-flex mt-5 ">
              <a
                href="https://github.com/ShedrachMorris"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaGithub className="text-4xl ml-5 text-orange-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin className="text-4xl ml-5 text-red-500" />
              </a>
              <a
                href="https://x.com/ShedrachMorris8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <RiTwitterXFill className="text-4xl ml-5 text-cyan-400" />
              </a>
            </div>
          </div>
          <div className="ml-12 mt-5 pl-10">
            <a href={cv} download={cv}>
              <button
                alt=""
                className="px-7 py-2 border mt-10 rounded-md bg-gradient-to-r
                 from-blue-400 to-yellow-200 hover:bg-gradient-to-tr from-red-500 to-blue-500"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="sm:">
          <div className="blob-container">
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
