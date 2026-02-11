import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import "./app.css"; 
import { useFadeIn } from "./components/scroll/fade-in";

function App() {
  useFadeIn()
  
  return (
    <>
      <div className="water-bg" />
      <div className="glass-page">
        <Header />
        <Home />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}


export default App;
