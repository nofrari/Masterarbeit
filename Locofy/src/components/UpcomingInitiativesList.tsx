import { FunctionComponent, useCallback } from "react";
import InitiativeCard from "./InitiativeCard";
import "./UpcomingInitiativesList.css";
import { useNavigate } from "react-router-dom";

export type UpcomingInitiativesListType = {
  className?: string;
};

const UpcomingInitiativesList: FunctionComponent<
  UpcomingInitiativesListType
> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCalendarLinkTextClick = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  return (
    <div className={`upcoming-initiatives-list ${className}`}>
      <b className="section-title3">Kommende Initiativen</b>
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
      <b className="calendar-link" onClick={onCalendarLinkTextClick}>
        Zum Kalender
      </b>
    </div>
  );
};

export default UpcomingInitiativesList;
