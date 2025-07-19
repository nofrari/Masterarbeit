/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  textAreaLabel: string;
  className: any;
}

export const TextArea = ({
  textAreaLabel = "Label",
  className,
}: Props): JSX.Element => {
  return (
    <div className={`text-area ${className}`}>
      <div className="text-area-label">{textAreaLabel}</div>

      <div className="text-area-input" />
    </div>
  );
};

TextArea.propTypes = {
  textAreaLabel: PropTypes.string,
};
