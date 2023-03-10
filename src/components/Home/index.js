import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import EventCategory from "../EventCategory";
import Countdown from "../Countdown";
import Highlights from "../Highlights";
import { BodyGradient } from "./HomeElements";
import { EventsData } from "../EventCategory/EventsData";
import Footer from "../Footer";
import Members from "../Members/Members";
import GoogleMaps from "./../Maps/GoogleMap";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Countdown />
      <BodyGradient>
        <Highlights />
        <EventCategory {...EventsData} />
        <Members />
        <GoogleMaps />
      </BodyGradient>
      <Footer />
    </>
  );
};

export default Home;
