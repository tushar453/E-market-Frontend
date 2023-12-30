// MovingText.js
import React from "react";
import "./movingtext.css";

const MovingText = ({ sentence }) => {
  return (
    <div className="moving-text-container">
      <p className="moving-text">{sentence}</p>
    </div>
  );
};

export default MovingText;
