"use client"; 
import { useState } from "react";
import Image from "next/image";
import Banner from "./component/Banner";
import WorkSection from "./component/WorkSection";
import Services from "./component/Services";
import Feature from "./component/Feature";
import Testimonials from "./component/Testimonials";
import Trust from "./component/Trust";
import "../scss/style.scss";
export default function Home() {
  return (
    <div className="container">
      <Banner/>
      <WorkSection/>
      <Feature/>
      <Services/>
      <Testimonials/>
      <Trust />
    </div>
  );
}
