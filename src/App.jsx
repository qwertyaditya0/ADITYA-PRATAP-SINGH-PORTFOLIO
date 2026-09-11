import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DSAJourney from "./components/DSAJourney";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <DSAJourney />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;