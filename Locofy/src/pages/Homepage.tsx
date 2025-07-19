import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import OngoingInitiativesList from "../components/OngoingInitiativesList";
import UpcomingInitiativesList from "../components/UpcomingInitiativesList";
import Button from "../components/Button";
import IdeaVoting from "../components/IdeaVoting";
import NavigationBar from "../components/NavigationBar";
import "./Homepage.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/submitidea");
  }, [navigate]);

  const onCalendarIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="header2">
        <div className="logo1">
          <img
            className="erika-logo-icon1"
            loading="lazy"
            alt=""
            src="Erika Logo.png"
          />
          <h1 className="erika-logo-text1">ERIKA</h1>
        </div>
        <div className="options">
          <img
            className="customize-icon"
            loading="lazy"
            alt=""
            src="Customize Icon.png"
          />
          <img
            className="customize-icon"
            loading="lazy"
            alt=""
            src="Notification Icon.png"
          />
        </div>
      </div>
      <main className="main1">
        <div className="erika-progress-card">
          <FrameComponent1 />
        </div>
        <div className="virtual-garden">
          <b className="section-title">Virtueller Garten</b>
          <div className="wrapper-virtual-garden">
            <img
              className="virtual-garden-icon"
              loading="lazy"
              alt=""
              src="Virtual Garden.png"
            />
          </div>
        </div>
        <section className="initiatives">
          <OngoingInitiativesList />
          <UpcomingInitiativesList />
        </section>
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
        <IdeaVoting />
        <div className="idea-submission">
          <b className="section-title">{`Hast du eine Idee für eine Initiative? `}</b>
          <b className="idea-submission-description">
            Sobald du Stufe 2 erreichst, kannst du sie in Erika einreichen!
          </b>
          <Button
            isIconVisible
            buttonName="Lass deine Pflanze wachsen"
            isNameVisible
            onBackButtonContainerClick={onButtonClick}
            backButtonMargin="unset"
            backButtonPosition="unset"
            backButtonTop="unset"
            backButtonLeft="unset"
            backButtonPadding="12px 25px"
            backButtonBorder="none"
            backButtonWidth="100%"
            backIcon="Button Icon.png"
            buttonNameWidth="unset"
            buttonNameFlex="1"
          />
        </div>
      </main>
      <NavigationBar onCalendarIconClick={onCalendarIconClick} />
    </div>
  );
};

export default Homepage;
