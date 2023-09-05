import React from 'react'
import { Fade } from "react-awesome-reveal";
function About({src}) {
  return (
    <>
    <div id="about">
      <Fade direction="left" className='fadewidth' >
      <div id='card' >
    <img src={src} alt=""/>
    <div id="textabout">
        <h5>(ABout me)</h5>
        <p>I'm a dynamic full stack developer with extensive open source contributions, including project maintenance at AlphaVio Org and top-tier input to the Mirage UI frontend component library. Beyond coding, I indulge my passion for gaming, travel, and cuisine. Seamlessly blending technical prowess with a creative mindset, I offer unique perspectives to projects. Let's collaborate and turn your ideas into captivating digital experiences. "In code, each line narrates a story, and every project is an epic." Together, we'll script greatness.</p>
        <a href="">Let's talk</a>
        </div>
        </div>  
        </Fade>      
    </div>
    <div id="about" className='toopp'>
    <Fade direction="left" className='fadewidth'>
      <div id='card'>
    <img src={src} alt=""/>
    <div id="textabout">
        <h5>(ABout me)</h5>
        <p>I'm a dynamic full stack developer with extensive open source contributions, including project maintenance at AlphaVio Org and top-tier input to the Mirage UI frontend component library. Beyond coding, I indulge my passion for gaming, travel, and cuisine. Seamlessly blending technical prowess with a creative mindset, I offer unique perspectives to projects. Let's collaborate and turn your ideas into captivating digital experiences. "In code, each line narrates a story, and every project is an epic." Together, we'll script greatness.</p>
        <a href="">Let's talk</a>
        </div>
        </div>
        </Fade>          
    </div>
    </>
  )
}

export default About