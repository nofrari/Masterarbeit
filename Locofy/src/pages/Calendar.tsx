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
      <div className="header">
        <div className="logo">
          <img
            className="erika-logo-icon"
            loading="lazy"
            alt=""
            src="Erika Logo.png"
          />
          <h1 className="erika-logo-text">ERIKA</h1>
        </div>
        <img className="options-icon" loading="lazy" alt="" src="Options.png" />
      </div>
      <section className="main">
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
      <NavigationBar onHomeIconClick={onHomeIconClick} />
    </div>
  );
};

export default Calendar;
