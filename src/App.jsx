import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import FloatingDock from "./components/common/FloatingDock";
import Contact from "./sections/Contact/Contact";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        text-slate-900
        dark:bg-[#020617]
        dark:text-white
        transition-colors
        duration-500
      "
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingDock />
    </main>
  );
}

export default App;