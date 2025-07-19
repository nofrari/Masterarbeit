/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  workshopIcon: string;
}

export const WorkshopIcon = ({
  className,
  workshopIcon = "/img/workshop-icon.png",
}: Props): JSX.Element => {
  return (
    <img
      className={`workshop-icon ${className}`}
      alt="Workshop icon"
      src={workshopIcon}
    />
  );
};

WorkshopIcon.propTypes = {
  workshopIcon: PropTypes.string,
};
