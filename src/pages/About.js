import React from "react";
import Kottuwa from "../assets/akottu.jpg"

import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Kottuwa})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
Since 2015 we deliver the Best Kottu Rotti in Matale Town. Our secret recipe adds the unique flavor to each Kottu in style. 
        </p>
      </div>
    </div>
  );
}

export default About;