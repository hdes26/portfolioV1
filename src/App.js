import React, { Fragment } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import TextAnimation from "./components/textAnimation";
const App = () => (
  <>
    {/* Navbar */}

    {/* Home */}
    <section>
      <Home />
    </section>

    {/* Animation */}
    <TextAnimation />

    {/* About me */}
    <section>
      <About />
    </section>

    {/* Projects */}
    <section></section>

    {/* Contact me */}
    <section></section>

    {/* Services */}
    <section></section>

    {/* Skills */}
    <section></section>
  </>
);

export default App;
