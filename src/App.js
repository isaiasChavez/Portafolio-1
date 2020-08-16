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
          <Hero id='hero' />
        </Fade>
      </div>
      
      <About id='about' />
      <div className="container-fluid bg-dark">
        <Services id='services' />

        <MyWorks id='works' />
        <Contact id='contact' />
        <FindMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
