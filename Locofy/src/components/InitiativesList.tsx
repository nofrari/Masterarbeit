import { FunctionComponent } from "react";
import InitiativeCard from "./InitiativeCard";
import "./InitiativesList.css";

export type InitiativesListType = {
  className?: string;
};

const InitiativesList: FunctionComponent<InitiativesListType> = ({
  className = "",
}) => {
  return (
    <div className={`initiatives-list ${className}`}>
      <InitiativeCard
        initiativeTitle="1 Woche Vegan"
        initiativeDay="30."
        default1={false}
        initiativeMonthAndYear="Jun 2025"
        initiativeTime="17:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Zuhause"
        registered
        registerdInitiativeCardBackground="linear-gradient(90deg, #ad7feb, #9fd9af)"
        challengeIcon="ChallengeIcon.svg"
        defaultInitiativeDetailsWidth="225px"
        defaultInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsWidth="unset"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Zuhause"
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
        initiativeDay="01."
        default1
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="07:00 - 12:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Oberer Stadtplatz"
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        challengeIcon="OfferIcon.svg"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Oberer Stadtplatz"
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
        default1
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="17:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="STURMFrei Werkraum"
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        challengeIcon="WorkshopIcon.svg"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="STURMFrei Werkraum"
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
        default1
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="07:00 - 12:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Oberer Stadtplatz"
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        challengeIcon="OfferIcon.svg"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Oberer Stadtplatz"
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
        initiativeTitle="Vegane Sommerküche"
        initiativeDay="05."
        default1
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="17:00 - 20:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="VHS Schulzentrum"
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        challengeIcon="WorkshopIcon.svg"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="VHS Schulzentrum"
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
        initiativeTitle="Klimastammtisch"
        initiativeDay="07."
        default1
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="18:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="STURMFrei Werkraum"
        registered={false}
        registerdInitiativeCardBackground="linear-gradient(90deg, #6fb6b8, #9fd9af)"
        challengeIcon="InformationIcon.svg"
        defaultInitiativeDetailsWidth="unset"
        defaultInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsWidth="225px"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="STURMFrei Werkraum"
        registerdInitiativeCardBorder="none"
        registerdInitiativeCardBackgroundColor="transparent"
        initiativeDayMargin="unset"
        initiativeMonthYearFontWeight="500"
        challengeIconHeight="18px"
        challengeIconMaxHeight="unset"
        initiativeTimeFontWeight="500"
        initiativeLocationFontWeight="500"
        initiativeNumberOfFontWeight="500"
        initiativeLocationFontWeight1="500"
      />
      <b className="more-link">Mehr laden</b>
    </div>
  );
};

export default InitiativesList;
