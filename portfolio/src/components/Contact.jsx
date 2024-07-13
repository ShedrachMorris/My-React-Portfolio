import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "./Form";

const Contact = () => {
  return (
    <>
      <div className="mt-10 bg-slate-300">
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
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <FaLinkedin className="text-4xl ml-5 text-red-500" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <RiTwitterXFill className="text-4xl ml-5 text-cyan-400" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <TfiEmail className="text-4xl ml-5 text-blue-500" />
          </a>
        </div>
        <div className="sm:flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
