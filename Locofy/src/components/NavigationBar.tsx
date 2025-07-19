import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export type NavigationBarType = {
  className?: string;

  /** Action props */
  onHomeIconClick?: () => void;
  onCalendarIconClick?: () => void;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({
  className = "",
  onHomeIconClick,
  onCalendarIconClick,
}) => {
  const navigate = useNavigate();

  const onCalendarIconClick1 = useCallback(() => {
    navigate("/");
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
        <img
          className="home-icon"
          loading="lazy"
          alt=""
          src="Home_Icon.svg"
          onClick={onHomeIconClick}
        />
        <img
          className="calendar-icon"
          loading="lazy"
          alt=""
          src="Calendar_Icon.svg"
          onClick={onCalendarIconClick}
        />
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
