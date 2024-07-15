import { aboutMe } from "../constants/const";
import { info } from "../constants/const";
import image from "./images/About.jpg";

const About = () => {
  return (
    <>
      <div className="m-2 min-[320px]:max-w-screen-sm
      min-[640px]:max-w-screen-md min-[768px]:max-w-screen-lg min-[1280px]:max-w-screen-xl">
        <div className="App flex flex-col items-center gap-8 p-8">
          <div className="text-lg font-bold border-b-2 border-black pb-2">
            <h1 className="text-4xl flex justify-center items-center mt-20">
              ABOUT ME
            </h1>
          </div>
        </div>

        <div className="lg:flex flex-row flex-wrap mt-10 md:grid grid-cols-2">
          <div className="flex-1">
            <img
              src={image}
              alt="profile"
              className="flex rounded-md size-auto min-[320px]:"
            />
          </div>
          <div className="flex-1 ml-3 mt-2 min-[320px]:m-0 min-[1024px]:ml-3">
            {aboutMe.map((about, index) => (
              <div key={index}>{about.label}</div>
            ))}
            <div className="grid min-[1024px]:grid-cols-2 min-[1024px]:mt-3 
            min-[320px]:grid-cols-1 min-[640px]:grid-cols-2">
              {info.map((info, index) => (
                <div key={index} className="m-3 min-[320px]:m-0 min-[1024px]:m-3">
                  <div className="text-2xl">{info.label}</div>
                  <div>{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
