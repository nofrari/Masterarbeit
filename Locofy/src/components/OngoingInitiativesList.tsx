import { FunctionComponent } from "react";
import InitiativeCard from "./InitiativeCard";
import "./OngoingInitiativesList.css";

export type OngoingInitiativesListType = {
  className?: string;
};

const OngoingInitiativesList: FunctionComponent<OngoingInitiativesListType> = ({
  className = "",
}) => {
  return (
    <div className={`ongoing-initiatives-list ${className}`}>
      <b className="section-title2">Laufende Initiative(n)</b>
      <InitiativeCard
        initiativeTitle="1 Woche Vegan"
        initiativeDay="30."
        default1={false}
        initiativeMonthAndYear="Jun 2025"
        initiativeTime="17:00 - 21:00"
        initiativeNumberOfDays="Tag 3 von 7"
        initiativeLocation="Zuhause"
        registered
        challengeIcon="ChallengeIcon.svg"
        clockIcon="Clock Icon.svg"
        locationIcon="Location Icon.svg"
        initiativeLocation1="Zuhause"
      />
    </div>
  );
};

export default OngoingInitiativesList;
