import React from "react";
import "./miniLogo.css";
import miniLogoSB from "/Users/sviatoslavmatsishin/Desktop/JS/SynthBrain/SynthBrainWebPage/public/images/miniLogoSB.png";

const FixedLogo = ({ src, alt }) => {
  return (
    <div className="fixed-logo">
      <img src={miniLogoSB} alt={alt} />
    </div>
  );
};

export default FixedLogo;
