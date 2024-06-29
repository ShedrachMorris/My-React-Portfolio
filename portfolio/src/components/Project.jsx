import { project } from "../constants/const";

const Project = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center items-center text-4xl">PROJECT</h1>
        <p className="flex justify-center items-center">
          PROJECT UNDER CONSTRUCTION
        </p>
        <div>
          {project.map((project, index) => (
            <div key={index}>
              {project.label}
              <div>{project.about}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
