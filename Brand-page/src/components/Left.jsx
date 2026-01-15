import React from "react";
import "/public/styles/left.css";

function Left() {
  return (
    <div className="left">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p className="text">
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>
      <span>
        <button className="btn1">Shop Now</button>
        <button className="btn2">Category</button>
      </span>
      <div className="tagbox">
        <p>Also Available On</p>
        <img src="public\images\flipkart.png" alt="" />
        <img src="public\images\amazon.png" alt="" />
      </div>
    </div>
  );
}

export default Left;
