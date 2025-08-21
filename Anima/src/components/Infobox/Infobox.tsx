/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  content: string;
  className: any;
  erikaPlant: string;
  colorCodingClassName: any;
}

export const Infobox = ({
  content = "Content",
  className,
  erikaPlant = "/img/erika-plant.png",
  colorCodingClassName,
}: Props): JSX.Element => {
  return (
    <div className={`infobox ${className}`}>
      <img className="erika-plant" alt="Erika plant" src={erikaPlant} />

      <div className={`color-coding ${colorCodingClassName}`}>{content}</div>
    </div>
  );
};

Infobox.propTypes = {
  content: PropTypes.string,
  erikaPlant: PropTypes.string,
};
