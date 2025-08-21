/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BasicIcon } from "../BasicIcon";
import "./style.css";

interface Props {
  initiativeTitle: string;
  initiativeDay: string;
  initiativeMonthAndYear: string;
  initiativeTime: string;
  initiativeLocation: string;
  initiativeNumberOfDays: string;
  registered: boolean;
  default1: boolean;
  className: any;
  override: JSX.Element;
  defaultInitiativeClassName: any;
}

export const InitiativeCard = ({
  initiativeTitle = "Title",
  initiativeDay = "01.",
  initiativeMonthAndYear = "Jul 2025",
  initiativeTime = "17:00 - 21:00",
  initiativeLocation = "STURMFrei Werkraum",
  initiativeNumberOfDays = "Tag 3 von 7",
  registered = true,
  default1 = true,
  className,
  override = <BasicIcon className="initiative-type-icon" />,
  defaultInitiativeClassName,
}: Props): JSX.Element => {
  return (
    <div className={`initiative-card ${className}`}>
      <div className="initiative-date">
        <div className="initiative-day">{initiativeDay}</div>

        <div className="initiative-month">{initiativeMonthAndYear}</div>
      </div>

      <div className="initiative-summary">
        <div className="initiative-header">
          {override}
          <div className="initiative-title">{initiativeTitle}</div>
        </div>

        {default1 && (
          <div className={`default-initiative ${defaultInitiativeClassName}`}>
            <div className="initiative-time">
              <div className="text-wrapper-3">{initiativeTime}</div>
            </div>

            <div className="initiative-location">
              <div className="text-wrapper-3">{initiativeLocation}</div>
            </div>
          </div>
        )}

        {registered && (
          <div className="registered">
            <div className="div-2">
              <img
                className="clock-icon"
                alt="Clock icon"
                src="/img/clock-icon.png"
              />

              <div className="text-wrapper-3">{initiativeNumberOfDays}</div>
            </div>

            <div className="div-2">
              <img
                className="location-icon"
                alt="Location icon"
                src="/img/location-icon.png"
              />

              <div className="text-wrapper-3">{initiativeLocation}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
InitiativeCard.propTypes = {
  initiativeTitle: PropTypes.string,
  initiativeDay: PropTypes.string,
  initiativeMonthAndYear: PropTypes.string,
  initiativeTime: PropTypes.string,
  initiativeLocation: PropTypes.string,
  initiativeNumberOfDays: PropTypes.string,
  registered: PropTypes.bool,
  default1: PropTypes.bool,
};
