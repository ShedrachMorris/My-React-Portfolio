import { aboutMe } from "../constants/const";
import { info } from "../constants/const";
import image from "./images/About.jpg";

const About = () => {
  return (
    <>
      <div className="m-2">
        <div className="App flex flex-col items-center gap-8 p-8">
          <div className="text-lg font-bold border-b-2 border-black pb-2">
            <h1 className="text-4xl flex justify-center items-center mt-20">
              ABOUT ME
            </h1>
          </div>
        </div>

        <div className="lg:flex flex-row flex-wrap mt-10 md:grid grid-cols-2 sm:">
          <div className="flex-1">
            <img
              src={image}
              alt="profile"
              className="lg:flex rounded-md size-auto"
            />
          </div>
          <div className="flex-1 ml-10">
            {aboutMe.map((about, index) => (
              <div key={index}>{about.label}</div>
            ))}
            <div className="grid grid-cols-2">
              {info.map((info, index) => (
                <div key={index} className="m-3">
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
