/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  selectLabel: string;
  className: any;
}

export const Select = ({
  selectLabel = "Label",
  className,
}: Props): JSX.Element => {
  return (
    <div className={`select ${className}`}>
      <div className="select-label">{selectLabel}</div>

      <div className="select-input">
        <div className="select-options">-</div>

        <div className="down-icon-wrapper">
          <img
            className="down-icon-3"
            alt="Down icon"
            src="/img/down-icon-1.png"
          />
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  selectLabel: PropTypes.string,
};
