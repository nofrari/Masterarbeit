import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { ChallengeIcon } from "../../components/ChallengeIcon";
import { InitiativeCard } from "../../components/InitiativeCard";
import { OfferIcon } from "../../components/OfferIcon";
import { SparkleIcon } from "../../components/SparkleIcon";
import { WorkshopIcon } from "../../components/WorkshopIcon";
import "./style.css";

export const Homepage = (): JSX.Element => {
  return (
    <div className="homepage" data-model-id="2830:871">
      <header className="header-4">
        <div className="logo-2">
          <img
            className="erika-logo-2"
            alt="Erika logo"
            src="/img/erika-logo-1.png"
          />

          <div className="erika-logo-text-2">ERIKA</div>
        </div>

        <div className="options">
          <img
            className="img-3"
            alt="Customize icon"
            src="/img/customize-icon.png"
          />

          <img
            className="img-3"
            alt="Notification icon"
            src="/img/notification-icon-1.png"
          />
        </div>
      </header>

      <div className="main-2">
        <img
          className="erika-progress-card"
          alt="Erika progress card"
          src="/img/erika-progress-card.png"
        />

        <div className="virtual-garden">
          <div className="section-title">Virtueller Garten</div>

          <img
            className="virtual-garden-2"
            alt="Virtual garden"
            src="/img/virtual-garden.png"
          />
        </div>

        <div className="initiatives">
          <div className="div-3">
            <div className="section-title">Laufende Initiative(n)</div>

            <InitiativeCard
              className="registerd-initiative-2"
              default1={false}
              initiativeDay="30."
              initiativeLocation="Zuhause"
              initiativeMonthAndYear="Jun 2025"
              initiativeNumberOfDays="Tag 3 von 7"
              initiativeTitle="1 Woche Vegan"
              override={
                <ChallengeIcon className="design-component-instance-node-4" />
              }
            />
          </div>

          <div className="div-3">
            <div className="section-title">Kommende Initiativen</div>

            <InitiativeCard
              className="default-initiative-3"
              defaultInitiativeClassName="default-initiative-4"
              initiativeDay="01."
              initiativeLocation="Oberer Stadtplatz"
              initiativeMonthAndYear="Jul 2025"
              initiativeTime="07:00 - 12:00"
              initiativeTitle="Wochenmarkt"
              override={
                <OfferIcon
                  className="design-component-instance-node-4"
                  offerIcon="/img/offericon-3.png"
                />
              }
              registered={false}
            />
            <InitiativeCard
              className="default-initiative-3"
              initiativeDay="02."
              initiativeLocation="STURMFrei Werkraum"
              initiativeMonthAndYear="Jul 2025"
              initiativeTime="17:00 - 21:00"
              initiativeTitle="Repair Café"
              override={
                <WorkshopIcon
                  className="workshop-icon-2"
                  workshopIcon="/img/workshopicon-2.png"
                />
              }
              registered={false}
            />
            <InitiativeCard
              className="default-initiative-3"
              defaultInitiativeClassName="default-initiative-4"
              initiativeDay="04."
              initiativeLocation="Oberer Stadtplatz"
              initiativeMonthAndYear="Jul 2025"
              initiativeTime="07:00 - 12:00"
              initiativeTitle="Wochenmarkt"
              override={
                <OfferIcon
                  className="design-component-instance-node-4"
                  offerIcon="/img/offericon-3.png"
                />
              }
              registered={false}
            />
             <Link className="calendar-link" to="/calendar">
              Zum Kalender
            </Link>
          </div>
        </div>

        <Button
          buttonClassName="button-3"
          buttonName="Entdecke passende Initiativen"
          override={<SparkleIcon className="button-icon-2" />}
        />
        <div className="div-3">
          <div className="section-header">
            <div className="section-title-2">Ideen bewerten</div>

            <div className="info-icon">
              <Link to="/modal">
                <img
                  className="info-icon-2"
                  alt="Info icon"
                  src="/img/info-icon.png"
                />
              </Link>
            </div>
          </div>

          <div className="accordion-list">
            <Accordion
              accordionDetails="Details"
              accordionTitle="Autofreier Tag"
              className="accordion-instance"
              closed={false}
            />
            <Accordion
              accordionTitle="Flohmarkt"
              className="accordion-instance"
              open={false}
            />
            <Accordion
              accordionTitle="Müllsammeln"
              className="accordion-instance"
              open={false}
            />
          </div>
        </div>

        <div className="idea-submission">
          <p className="section-title">
            Hast du eine Idee für eine Initiative?
          </p>

          <p className="p">
            Sobald du Stufe 2 erreichst, kannst du sie in Erika einreichen!
          </p>

          <Link to="/submitidea">
            <button className="button-4">
              <div className="plant-icon-wrapper">
                <img
                  className="plant-icon"
                  alt="Plant icon"
                  src="/img/plant-icon.png"
                />
              </div>

              <div className="button-name-2">Lass deine Pflanze wachsen</div>
            </button>
          </Link>
        </div>
      </div>

      <img
        className="navigation-bar-2"
        alt="Navigation bar"
        src="/img/navigationbar-1.png"
      />
    </div>
  );
};
