import React, { useRef, lazy } from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Cars from "./cars/Cars";
import About from "./about/About";
import Reviews from "./reviews/Reviews";

const Home = () => {
  const CarsSectionRef = useRef(null);
    
  const scrollToCarsSection = () => {
      CarsSectionRef.current?.scrollIntoView({behavior: "smooth"})
  };

  return (
    <>
      <Hero scrollToCarsSection={scrollToCarsSection}/>
      <About />
      <Featured />
      <Cars ref={CarsSectionRef}/>
      <Reviews />
    </>
  );
};

export default Home;
