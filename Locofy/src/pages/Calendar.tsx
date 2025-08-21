import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Infobox from "../components/Infobox";
import Calendar1 from "../components/Calendar1";
import Button from "../components/Button";
import InitiativesList from "../components/InitiativesList";
import NavigationBar from "../components/NavigationBar";
import "./Calendar.css";

const Calendar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="calendar">
      <div className="header3">
        <div className="logo1">
          <img
            className="erika-logo-icon1"
            loading="lazy"
            alt=""
            src="Erika Logo.png"
          />
          <h1 className="erika-logo-text1">ERIKA</h1>
        </div>
        <img
          className="notification-icon1"
          loading="lazy"
          alt=""
          src="Notification Icon.png"
        />
      </div>
      <section className="main1">
        <Infobox content="Die Initiativen, bei denen du dich angemeldet hast, sind in Lila markiert." />
        <Calendar1 />
        <Button
          isIconVisible
          buttonName="Entdecke passende Initiativen"
          isNameVisible
          backButtonMargin="unset"
          backButtonPosition="unset"
          backButtonTop="unset"
          backButtonLeft="unset"
          backButtonPadding="12px 25px"
          backButtonBorder="none"
          backButtonWidth="100%"
          backIcon="Button Icon.svg"
          buttonNameWidth="unset"
          buttonNameFlex="1"
        />
        <InitiativesList />
      </section>
       <NavigationBar
        onHomeIconClick={onHomeIconClick}
        homepage={false}
        calendar
        showCalendarIcon={false}
        calendarIconVisible
      />
    </div>
  );
};

export default Calendar;
