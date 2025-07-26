import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Accordion.css";

export type AccordionType = {
  className?: string;
  accordionDetails?: string;
  closed1?: boolean;
  accordionTitle?: string;
  open1?: boolean;
  upIcon?: string;
  downIcon?: string;
  dislikeIcon?: string;
  likeIcon?: string;
  showAccordionDetails?: boolean;

  /** Style props */
  accordionDetailsAlignSelf?: CSSProperties["alignSelf"];
  accordionDetailsWidth?: CSSProperties["width"];
};

const Accordion: FunctionComponent<AccordionType> = ({
  className = "",
  accordionDetails = "Details",
  closed1 = false,
  accordionTitle = "Autofreier Tag",
  open1 = true,
  upIcon,
  downIcon,
  dislikeIcon,
  likeIcon,
  showAccordionDetails,
  accordionDetailsAlignSelf,
  accordionDetailsWidth,
}) => {
  const accordionDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: accordionDetailsAlignSelf,
      width: accordionDetailsWidth,
    };
  }, [accordionDetailsAlignSelf, accordionDetailsWidth]);

  return (
    <div className={`accordion ${className}`}>
      <div className="accordion-summary">
        <div className="accordion-title">{accordionTitle}</div>
        {!!open1 && (
          <img className="up-icon" loading="lazy" alt="" src={upIcon} />
        )}
        {!!closed1 && <img className="down-icon1" alt="" src={downIcon} />}
        <div className="voting-controls">
          <img
            className="dislike-icon"
            loading="lazy"
            alt=""
            src={dislikeIcon}
          />
          <img className="dislike-icon" loading="lazy" alt="" src={likeIcon} />
        </div>
      </div>
      {!!showAccordionDetails && (
        <div className="accordion-details" style={accordionDetailsStyle}>
          {accordionDetails}
        </div>
      )}
       <div className="accordion-summary">
        <div className="accordion-title">{accordionTitle}</div>
        {!!open1 && (
          <img className="up-icon" loading="lazy" alt="" src={upIcon} />
        )}
        {!!closed1 && <img className="down-icon1" alt="" src={downIcon} />}
        <div className="voting-controls">
          <img
            className="dislike-icon"
            loading="lazy"
            alt=""
            src={dislikeIcon}
          />
          <img className="dislike-icon" loading="lazy" alt="" src={likeIcon} />
        </div>
      </div>
      {!!showAccordionDetails && (
        <div className="accordion-details" style={accordionDetailsStyle}>
          {accordionDetails}
        </div>
      )}
    </div>
  );
};

export default Accordion;
