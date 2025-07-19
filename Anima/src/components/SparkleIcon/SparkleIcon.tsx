/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const SparkleIcon = ({ className }: Props): JSX.Element => {
  return (
    <img
      className={`sparkle-icon ${className}`}
      alt="Sparkle icon"
      src="/img/sparkle-icon.png"
    />
  );
};
