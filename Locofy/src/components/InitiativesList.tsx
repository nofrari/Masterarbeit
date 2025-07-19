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
        initiativeMonthAndYear="Jun 2025"
        initiativeTime="17:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Zuhause"
        challengeIcon="ChallengeIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Zuhause"
        default1={false}
        registered
        registerdInitiativeCardBackground="linear-gradient(90deg, #ad7feb, #9fd9af)"
        defaultInitiativeDetailsWidth="225px"
        defaultInitiativeDetailsAlignSelf="unset"
        registeredInitiativeDetailsAlignSelf="stretch"
        registeredInitiativeDetailsWidth="unset"
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
      <InitiativeCard
        initiativeTitle="Vegane Sommerküche"
        initiativeDay="05."
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="17:00 - 20:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="VHS Schulzentrum"
        challengeIcon="WorkshopIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="VHS Schulzentrum"
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
        initiativeTitle="Klimastammtisch"
        initiativeDay="07."
        initiativeMonthAndYear="Jul 2025"
        initiativeTime="18:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="STURMFrei Werkraum"
        challengeIcon="InformationIcon.svg"
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
