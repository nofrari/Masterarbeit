/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  checkboxLabel: string;
  className: any;
}

export const Checkbox = ({
  checkboxLabel = "Label",
  className,
}: Props): JSX.Element => {
  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox-input" />

      <div className="checkbox-label">{checkboxLabel}</div>
    </div>
  );
};

Checkbox.propTypes = {
  checkboxLabel: PropTypes.string,
};
