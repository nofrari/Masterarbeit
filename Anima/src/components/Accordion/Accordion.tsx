/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  accordionTitle: string;
  accordionDetails: string;
  open: boolean;
  closed: boolean;
  className: any;
}

export const Accordion = ({
  accordionTitle = "Title",
  accordionDetails = "Details",
  open = true,
  closed = true,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`accordion ${className}`}>
      <div className="accordion-summary">
        <div className="accordion-title">{accordionTitle}</div>

        {open && (
          <div className="up-icon">
            <img className="up-icon-2" alt="Up icon" src="/img/up-icon.png" />
          </div>
        )}

        {closed && (
          <div className="down-icon-wrapper">
            <img
              className="down-icon-3"
              alt="Down icon"
              src="/img/down-icon-1.png"
            />
          </div>
        )}

        <div className="voting-controls">
          <img
            className="img-2"
            alt="Dislike icon"
            src="/img/dislike-icon.png"
          />

          <img className="img-2" alt="Like icon" src="/img/like-icon.png" />
        </div>
      </div>

      {open && <div className="accordion-details">{accordionDetails}</div>}
    </div>
  );
};

Accordion.propTypes = {
  accordionTitle: PropTypes.string,
  accordionDetails: PropTypes.string,
  open: PropTypes.bool,
  closed: PropTypes.bool,
};
