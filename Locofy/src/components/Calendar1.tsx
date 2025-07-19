import { FunctionComponent } from "react";
import CalendarWithEntries from "./CalendarWithEntries";
import "./Calendar1.css";

export type Calendar1Type = {
  className?: string;
};

const Calendar1: FunctionComponent<Calendar1Type> = ({ className = "" }) => {
  return (
    <div className={`calendar1 ${className}`}>
      <div className="calendar-options">
        <div className="preference-option">
          <div className="your-preference">Deine Präferenzen</div>
          <img className="toogleswitch-icon" alt="" src="ToogleSwitch.svg" />
        </div>
        <div className="filter-and-share-options">
          <img
            className="filter-icon"
            loading="lazy"
            alt=""
            src="Filter Icon.png"
          />
          <img
            className="share-icon"
            loading="lazy"
            alt=""
            src="Share Icon.png"
          />
        </div>
      </div>
      <CalendarWithEntries />
    </div>
  );
};

export default Calendar1;
