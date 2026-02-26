import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ThreeBackground from "../components/ThreeBackground";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <>
    <CustomCursor />
      <Navbar />

      <ThreeBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}