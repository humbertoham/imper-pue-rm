import React from "react";

import Banner from "./Banner";
import About from "./About";
import Section from "./Section";
import Contact from "./Contact";
import Work from "./Work";
import Map from "./Map";
import Examples from "./Examples";
/*

import Sec from "./Sec";


import Comps from "./Comps";
import Gallery from "./Gallery"; */
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Section />
      <Work />
      <Examples />
      <Contact />
      <Map />
    </>
  );
};

export default Home;
