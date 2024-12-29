import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
