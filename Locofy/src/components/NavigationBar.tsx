import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export type NavigationBarType = {
  className?: string;
  homepage?: boolean;
  calendar?: boolean;
  showCalendarIcon?: boolean;
  calendarIconVisible?: boolean;

  /** Action props */
  onHomeIconClick?: () => void;
  onCalendarIconClick?: () => void;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({
  className = "",
  onHomeIconClick,
  onCalendarIconClick,
  homepage = true,
  calendar = false,
  showCalendarIcon,
  calendarIconVisible,
}) => {
  const navigate = useNavigate();

  const onCalendarIconClick1 = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <section className={`navigationbar ${className}`}>
      <div className="navigationbar-options">
        <img
          className="waidhofenapp-icon"
          loading="lazy"
          alt=""
          src="WaidhofenApp_Icon.png"
        />
        {!!homepage && (
          <img
            className="home-icon"
            loading="lazy"
            alt=""
            src="Home_Icon.svg"
            onClick={onHomeIconClick}
          />
        )}
        {!!calendar && (
          <img className="home-icon1" alt="" src="Home_Icon.svg" />
        )}
        {!!showCalendarIcon && (
          <img
            className="calendar-icon"
            loading="lazy"
            alt=""
            src="Calendar_Icon.svg"
            onClick={onCalendarIconClick}
          />
        )}
        {!!calendarIconVisible && (
          <img className="home-icon1" alt="" src="Calendar_Icon.svg" />
        )}
        <img className="home-icon" loading="lazy" alt="" src="List_Icon.svg" />
        <img
          className="waidhofenapp-icon"
          loading="lazy"
          alt=""
          src="Settings_Icon.png"
        />
      </div>
    </section>
  );
};

export default NavigationBar;
