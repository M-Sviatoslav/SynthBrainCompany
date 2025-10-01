import React from "react";
import "./botSection.css";

const Diamond = ({ children }) => (
  <div className="diamond-wrapper">
    <div className="diamond">
      <div className="diamond-content">{children}</div>
    </div>
  </div>
);

const DiamondRow = () => {
  return (
    <section className="diamond-row">
      <Diamond>Interaction with the client</Diamond>
      <Diamond>A wide range of possibilities</Diamond>
      <Diamond>Available on any platform</Diamond>
    </section>
  );
};

export default DiamondRow;
