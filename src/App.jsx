import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Technologies from "./componets/Technologies";
import Experience from "./componets/Experience";
//import Projets from "./componets/projets";    
import Work from "./componets/Work";
import Contact from "./componets/Contact";  
import Skills from "./componets/Skills";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        {/* <Technologies /> */}
        <Experience />
        {/* <Projets /> */}
        <Work />
        <Contact />
      </div>
    </div>


  );
};

export default App