import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Never thought I could one day be coding react. Where I am now, Giving up is not a option at all</p>
    <img src={image} alt="I made this"></img>
    
    </div>;
}

export default About;
