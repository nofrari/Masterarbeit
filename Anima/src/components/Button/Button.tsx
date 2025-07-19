/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { BasicIcon } from "../BasicIcon";
import "./style.css";

interface Props {
  buttonName: string;
  isIconVisible: boolean;
  isNameVisible: boolean;
  buttonClassName: any;
  override: JSX.Element;
  to: string;
}

export const Button = ({
  buttonName = "Name",
  isIconVisible = true,
  isNameVisible = true,
  buttonClassName,
  override = <BasicIcon className="button-icon" />,
  to,
}: Props): JSX.Element => {
  return (
    <Link to={to}>
      <button className={`button ${buttonClassName}`}>
        {isIconVisible && <>{override}</>}

        {isNameVisible && <div className="button-name">{buttonName}</div>}
      </button>
    </Link>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  isIconVisible: PropTypes.bool,
  isNameVisible: PropTypes.bool,
  to: PropTypes.string,
};
