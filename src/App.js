import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import MyWorks from "./Components/MyWorks";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import FindMe from "./Components/FindMe";
import Fade from "react-reveal/Fade";

function App() {
  const [paginaEnPrincipal, setpaginaEnPrincipal] = useState({
    consejos: true,
    rentas: false,
    dejarConsejo: false,
  });

  return (
    <>
      <Navbar setpaginaEnPrincipal={setpaginaEnPrincipal} />
      <div className="container-fluid bg-dark">
        <Fade>
          <Hero />
        </Fade>
      </div>
      
      <About />
      <div className="container-fluid bg-dark">
        <Services />

        <MyWorks />
        <Contact />
        <FindMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
