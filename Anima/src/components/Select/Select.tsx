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

        <div className="down-icon">
          <img
            className="down-icon-2"
            alt="Down icon"
            src="/img/down-icon.png"
          />
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  selectLabel: PropTypes.string,
};
