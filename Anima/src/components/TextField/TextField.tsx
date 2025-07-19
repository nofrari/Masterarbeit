/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  textFieldLabel: string;
  className: any;
}

export const TextField = ({
  textFieldLabel = "Label",
  className,
}: Props): JSX.Element => {
  return (
    <div className={`text-field ${className}`}>
      <div className="text-field-label">{textFieldLabel}</div>

      <div className="text-field-input" />
    </div>
  );
};

TextField.propTypes = {
  textFieldLabel: PropTypes.string,
};
