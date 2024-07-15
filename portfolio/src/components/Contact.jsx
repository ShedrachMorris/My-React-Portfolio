import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "./Form";

const Contact = () => {
  return (
   
      <div className="mt-10 min-[320px]:max-w-screen-sm min-[768px]:max-w-screen-md
       min-[1024px]:max-w-screen-lg min-[1280px]:max-w-screen-xl">
        <div className="App flex flex-col items-center gap-8 p-8">
          <div className="text-lg font-bold border-b-2 border-black pb-2">
            <h1 className="flex justify-center items-center text-4xl">
              CONTACT ME
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center mt-11 flex-row flex-wrap">
          <a
            href="https://github.com/ShedrachMorris"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub className="text-4xl ml-5 text-orange-900" />
          </a>
          <a href="https://www.linkedin.com/in/shedrach-morris-uzoigwe-466b15252/" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaLinkedin className="text-4xl ml-5 text-red-500" />
          </a>
          <a href="https://x.com/ShedrachMorris8" target="_blank" rel="noopener noreferrer">
            {" "}
            <RiTwitterXFill className="text-4xl ml-5 text-cyan-400" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <TfiEmail className="text-4xl ml-5 text-blue-500" />
          </a>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
  
  );
};

export default Contact;
