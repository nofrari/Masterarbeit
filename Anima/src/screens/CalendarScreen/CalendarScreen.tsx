import React from "react";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { ChallengeIcon } from "../../components/ChallengeIcon";
import { Infobox } from "../../components/Infobox";
import { InformationIcon } from "../../components/InformationIcon";
import { InitiativeCard } from "../../components/InitiativeCard";
import { OfferIcon } from "../../components/OfferIcon";
import { SparkleIcon } from "../../components/SparkleIcon";
import { WorkshopIcon } from "../../components/WorkshopIcon";
import "./style.css";

export const CalendarScreen = (): JSX.Element => {
  
  return (
    <div className="calendar-screen" data-model-id="2911:1747">
      <header className="header">
        <div className="logo">
          <img
            className="erika-logo"
            alt="Erika logo"
            src="/img/erika-logo-1.png"
          />

          <div className="erika-logo-text">ERIKA</div>
        </div>

        <img
          className="notification-icon"
          alt="Notification icon"
          src="/img/notification-icon-1.png"
        />
      </header>

      <div className="main">
        <Infobox
          className="design-component-instance-node"
          colorCodingClassName="infobox-instance"
          content="Die Initiativen, bei denen du dich angemeldet hast, sind in Lila markiert."
          erikaPlant="/img/erika-plant-3.png"
        />
        <Calendar className="calendar-instance" />
        <Button
          buttonClassName="design-component-instance-node"
          buttonName="Entdecke passende Initiativen"
          override={<SparkleIcon className="sparkle-icon-instance" />}
        />
        <div className="initiatives-list">
          <InitiativeCard
            className="registerd-initiative"
            default1={false}
            initiativeDay="30."
            initiativeLocation="Zuhause"
            initiativeMonthAndYear="Jun 2025"
            initiativeNumberOfDays="Tag 3 von 7"
            initiativeTitle="1 Woche Vegan"
            override={
              <ChallengeIcon className="design-component-instance-node-2" />
            }
          />
          <InitiativeCard
            className="default-initiative-2"
            defaultInitiativeClassName="initiative-card-instance"
            initiativeDay="01."
            initiativeLocation="Oberer Stadtplatz"
            initiativeMonthAndYear="Jul 2025"
            initiativeTime="07:00 - 12:00"
            initiativeTitle="Wochenmarkt"
            override={
              <OfferIcon
                className="design-component-instance-node-2"
                offerIcon="/img/offericon-3.png"
              />
            }
            registered={false}
          />
          <InitiativeCard
            className="default-initiative-2"
            initiativeDay="02."
            initiativeLocation="STURMFrei Werkraum"
            initiativeMonthAndYear="Jul 2025"
            initiativeTime="17:00 - 21:00"
            initiativeTitle="Repair Café"
            override={
              <WorkshopIcon
                className="workshop-icon-instance"
                workshopIcon="/img/workshopicon-2.png"
              />
            }
            registered={false}
          />
          <InitiativeCard
            className="default-initiative-2"
            defaultInitiativeClassName="initiative-card-instance"
            initiativeDay="04."
            initiativeLocation="Oberer Stadtplatz"
            initiativeMonthAndYear="Jul 2025"
            initiativeTime="07:00 - 12:00"
            initiativeTitle="Wochenmarkt"
            override={
              <OfferIcon
                className="design-component-instance-node-2"
                offerIcon="/img/offericon-3.png"
              />
            }
            registered={false}
          />
          <InitiativeCard
            className="default-initiative-2"
            defaultInitiativeClassName="initiative-card-instance"
            initiativeDay="05."
            initiativeLocation="VHS Schulzentrum"
            initiativeMonthAndYear="Jul 2025"
            initiativeTime="17:00 - 20:00"
            initiativeTitle="Vegane Sommerküche"
            override={
              <WorkshopIcon
                className="workshop-icon-instance"
                workshopIcon="/img/workshopicon-2.png"
              />
            }
            registered={false}
          />
          <InitiativeCard
            className="default-initiative-2"
            initiativeDay="07."
            initiativeLocation="STURMFrei Werkraum"
            initiativeMonthAndYear="Jul 2025"
            initiativeTime="18:00 - 21:00"
            initiativeTitle="Klimastammtisch"
            override={<InformationIcon className="information-icon-instance" />}
            registered={false}
          />
          <div className="more-link">Mehr laden</div>
        </div>
      </div>

      <img
        className="navigation-bar"
        alt="Navigation bar"
        src="/img/navigationbar.png"
      />
    </div>
  );
};
