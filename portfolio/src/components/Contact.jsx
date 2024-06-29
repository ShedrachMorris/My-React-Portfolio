import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <>
      <div className="mt-10 bg-slate-300">
        <h1 className="flex justify-center items-center text-4xl">
          CONTACT ME
        </h1>
        <div className="mt-5 flex justify-center items-center">
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
        <div className="flex flex-wrap justify-center items-center">
          <div className="m-10 size-4/6 ml-32">
            <form className="">
              <input
                type="text"
                name="NAME"
                required
                placeholder="YOUR NAME"
                className="flex text-center size-3/6 h-10 m-5 ml-32 rounded-md"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="YOUR EMAIL"
                className="flex m-5 size-2/4 rounded-md ml-32 h-10 text-center"
              />
              <input
                type="text"
                name="text"
                required
                placeholder="ENTER SUBJECT"
                className="flex m-5 size-2/4 rounded-md ml-32 h-10 text-center"
              />
              <textarea
                name=""
                id=""
                cols="15"
                rows="8"
                placeholder="Message Here..."
                className="flex m-5 size-5/6 rounded-md"
              ></textarea>

              <button
                type="submit"
                className="m-5 ml-64 rounded-md border size-2/12 h-11 bg-orange-400 hover:bg-gradient-to-r from-orange-500 to-blue-400"
              >
                <span className="text-center">SUBMIT</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
