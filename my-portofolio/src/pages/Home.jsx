import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import WhyHireMe from "../components/WhyHireMe";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <WhyHireMe/>
    </div>
  );
}

export default Home;
