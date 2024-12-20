import Marquee from "react-fast-marquee";
import React from "react";

const ScrollingText = () => {
  return (
    <Marquee className="bg-gold text-black py-4 text-xl">
      <div className="me-10">
        <b>September 2024:</b> Emerald Jewel Industry wins 3 awards for best
        manufactured Casting Chain, Platinum rings and Diamind Choker in IIJS.
      </div>
      <div className="me-10">
        <b>October 2024:</b> Emerald Jewel Industry achieves record production
        of 2.5 tonnes of Gold.
      </div>
    </Marquee>
  );
};

export default ScrollingText;
