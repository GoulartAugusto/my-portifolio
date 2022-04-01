import React from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portifolio from "./components/portifolio/Portifolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
  <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portifolio />
      <Contact />
      <Footer />
  </>
  )
}

export default App

//input CV for download in /header/CTA <a>
//input my user photo in Header.jsx on div me
//enter in, about me, a descriptive text

//video goes back on 1:34:00