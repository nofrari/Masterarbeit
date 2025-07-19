import { FunctionComponent } from "react";
import Accordion from "./Accordion";
import "./IdeaVoting.css";

export type IdeaVotingType = {
  className?: string;
};

const IdeaVoting: FunctionComponent<IdeaVotingType> = ({ className = "" }) => {
  return (
    <section className={`idea-voting ${className}`}>
      <div className="section-header">
        <b className="section-title4">Ideen bewerten</b>
        <img className="info-icon" loading="lazy" alt="" src="Info_Icon.svg" />
      </div>
      <div className="accordion-list">
        <Accordion
          accordionDetails="Details"
          closed1={false}
          accordionTitle="Autofreier Tag"
          open1
          upIcon="Up_Icon.png"
          downIcon="Down_Icon.png"
          dislikeIcon="Dislike Icon.png"
          likeIcon="Like Icon.png"
          showAccordionDetails
        />
        <Accordion
          accordionDetails="Details"
          closed1
          accordionTitle="Flohmarkt"
          open1={false}
          upIcon="Up_Icon.png"
          downIcon="Down_Icon.png"
          dislikeIcon="Dislike Icon.png"
          likeIcon="Like Icon.png"
          showAccordionDetails={false}
          accordionDetailsAlignSelf="unset"
          accordionDetailsWidth="313px"
        />
        <Accordion
          accordionDetails="Details"
          closed1
          accordionTitle="Müllsammeln"
          open1={false}
          upIcon="Up_Icon.png"
          downIcon="Down_Icon.png"
          dislikeIcon="Dislike Icon.png"
          likeIcon="Like Icon.png"
          showAccordionDetails={false}
          accordionDetailsAlignSelf="unset"
          accordionDetailsWidth="313px"
        />
      </div>
    </section>
  );
};

export default IdeaVoting;
