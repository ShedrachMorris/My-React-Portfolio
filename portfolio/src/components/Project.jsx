import { project } from "../constants/const";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const Project = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-8 p-8">
          <div className="text-lg font-bold border-b-2 border-black pb-2">
            <h1 className="flex justify-center items-center text-4xl">
              PROJECT
            </h1>
          </div>
        </div>

        <div className="m-5 mt-10">
          {project.map((project, index) => (
            <div className="relative group w-48 h-48" key={index}>
              <img
                src={project.image}
                alt=""
                className="w-full h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-md bg-orange-600 bg-opacity-1 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white top-8 m-2">{project.about}</div>
                <div className="flex">
                  <a
                    href="https://github.com/ShedrachMorris/virtualr"
                    target="_blank"
                  >
                    <FaGithub className="text-4xl ml-5 text-blue-500" />
                  </a>
                  <a href="https://virtualr-phi.vercel.app/" target="_blank">
                    <FaGlobe className="text-4xl ml-5 text-orange-900" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
