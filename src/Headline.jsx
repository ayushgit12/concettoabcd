import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Count from "./Countdown";

const style = {
    fontFamily:"'Bungee Inline', cursive",
    fontSize: "280%",
    color: "white"
}

const image_style = {
    height: "28%",
    width: "28%"
}

function Headline() {

    // const scrollToSection = () => {
    //     const targetSection = document.getElementById('targetSection');
    //     if (targetSection) {
    //       targetSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <div className="hero-content">
            <img src="Concetto Full Logo.png" style={image_style}></img><br></br><br></br>
            <div><h2 style={style}>C
            <Typewriter
                words={["ONCETTO' 23. COMING SOON."]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </h2></div>
            <h3 style={{"fontFamily": "'Goldman', cursive", "color":"white"}}>THE ANNUAL TECHNO-MANAGEMENT FEST OF IIT (ISM) DHANBAD.</h3><br></br>
            <Count/>
            {/* <button onClick={scrollToSection} style={{"backgroundColor":"transparent", "color":"white", "border":"0", "cursor":"pointer"}}><KeyboardDoubleArrowDownIcon style={{"fontSize":"400%"}}/></button> */}
        </div>
    )
}

export default Headline;
