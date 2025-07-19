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
      <header className="header">
        <div className="logo">
          <img
            className="erika-logo"
            alt="Erika logo"
            src="/img/erika-logo-1.png"
          />

          <div className="erika-logo-text">ERIKA</div>
        </div>

        <div className="options">
          <img
            className="img-4"
            alt="Customize icon"
            src="/img/customize-icon.png"
          />

          <img
            className="img-4"
            alt="Notification icon"
            src="/img/notification-icon-1.png"
          />
        </div>
      </header>

      <div className="main">
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
          <div className="div-2">
            <div className="section-title">Laufende Initiative(n)</div>

            <InitiativeCard
              className="registerd-initiative"
              default1={false}
              initiativeDay="30."
              initiativeLocation="Zuhause"
              initiativeMonthAndYear="Jun 2025"
              initiativeNumberOfDays="Tag 3 von 7"
              initiativeTitle="1 Woche Vegan"
              override={
                <ChallengeIcon className="design-component-instance-node" />
              }
            />
          </div>

          <div className="div-2">
            <div className="section-title">Kommende Initiativen</div>

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
                  className="design-component-instance-node"
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
                  className="design-component-instance-node"
                  offerIcon="/img/offericon-3.png"
                />
              }
              registered={false}
            />
            <div className="calendar-link">Zum Kalender</div>
          </div>
        </div>

        <Button
          buttonClassName="button-instance"
          buttonName="Entdecke passende Initiativen"
          override={<SparkleIcon className="sparkle-icon-instance" />}
        />
        <div className="div-2">
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
            <button className="button-2">
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
        className="navigation-bar"
        alt="Navigation bar"
        src="/img/navigationbar.png"
      />
    </div>
  );
};
