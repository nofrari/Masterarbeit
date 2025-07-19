import { FunctionComponent } from "react";
import InitiativeCard from "./InitiativeCard";
import "./UpcomingInitiativesList.css";

export type UpcomingInitiativesListType = {
  className?: string;
};

const UpcomingInitiativesList: FunctionComponent<
  UpcomingInitiativesListType
> = ({ className = "" }) => {
  return (
    <div className={`upcoming-initiatives-list ${className}`}>
      <b className="section-title3">Kommende Initiativen</b>
      <InitiativeCard
        initiativeTitle="Wochenmarkt"
        initiativeDay="01."
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="07:00 - 12:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Oberer Stadtplatz"
        challengeIcon="OfferIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Oberer Stadtplatz"
        default1
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        registerdInitiativeCardBorder="unset"
        registerdInitiativeCardBackgroundColor="unset"
        initiativeDayMargin="0"
        initiativeMonthYearFontWeight="500"
        challengeIconHeight="18px"
        challengeIconMaxHeight="unset"
        initiativeTimeFontWeight="500"
        initiativeLocationFontWeight="500"
        initiativeNumberOfFontWeight="500"
        initiativeLocationFontWeight1="500"
      />
      <InitiativeCard
        initiativeTitle="Repair Café"
        initiativeDay="02."
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="17:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="STURMFrei Werkraum"
        challengeIcon="WorkshopIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="STURMFrei Werkraum"
        default1
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        registerdInitiativeCardBorder="unset"
        registerdInitiativeCardBackgroundColor="unset"
        initiativeDayMargin="0"
        initiativeMonthYearFontWeight="500"
        challengeIconHeight="18px"
        challengeIconMaxHeight="unset"
        initiativeTimeFontWeight="500"
        initiativeLocationFontWeight="500"
        initiativeNumberOfFontWeight="500"
        initiativeLocationFontWeight1="500"
      />
      <InitiativeCard
        initiativeTitle="Wochenmarkt"
        initiativeDay="04."
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="07:00 - 12:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Oberer Stadtplatz"
        challengeIcon="OfferIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Oberer Stadtplatz"
        default1
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        registerdInitiativeCardBorder="unset"
        registerdInitiativeCardBackgroundColor="unset"
        initiativeDayMargin="0"
        initiativeMonthYearFontWeight="500"
        challengeIconHeight="18px"
        challengeIconMaxHeight="unset"
        initiativeTimeFontWeight="500"
        initiativeLocationFontWeight="500"
        initiativeNumberOfFontWeight="500"
        initiativeLocationFontWeight1="500"
      />
      <b className="calendar-link">Zum Kalender</b>
    </div>
  );
};

export default UpcomingInitiativesList;
