import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Foot from "./components/Foot";

const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Foot />
      </div>
    </>
  );
};

export default App;
