import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import WhyHireMe from "../components/WhyHireMe";
import ToolsAndSkills from "../components/ToolsAndSkills";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <WhyHireMe />
      <ToolsAndSkills />
    </div>
  );
}

export default Home;
