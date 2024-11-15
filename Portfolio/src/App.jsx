import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <main className="backImage">
        <Header />
        <Hero />
      </main>

      <About />
      <Work />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
