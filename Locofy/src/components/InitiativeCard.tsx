import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./InitiativeCard.css";

export type InitiativeCardType = {
  className?: string;
  initiativeTitle?: string;
  initiativeDay?: string;
  initiativeMonthAndYear?: string;
  initiativeTime?: string;
  initiativeNumberOfDays?: string;
  initiativeLocation?: string;
  challengeIcon?: string;
  clockIcon?: string;
  locationIcon?: string;
  initiativeLocation1?: string;
  default1?: boolean;
  registered?: boolean;

  /** Style props */
  registerdInitiativeCardBackground?: CSSProperties["background"];
  defaultInitiativeDetailsWidth?: CSSProperties["width"];
  defaultInitiativeDetailsAlignSelf?: CSSProperties["alignSelf"];
  registeredInitiativeDetailsAlignSelf?: CSSProperties["alignSelf"];
  registeredInitiativeDetailsWidth?: CSSProperties["width"];
  registerdInitiativeCardBorder?: CSSProperties["border"];
  registerdInitiativeCardBackgroundColor?: CSSProperties["backgroundColor"];
  initiativeDayMargin?: CSSProperties["margin"];
  initiativeMonthYearFontWeight?: CSSProperties["fontWeight"];
  challengeIconHeight?: CSSProperties["height"];
  challengeIconMaxHeight?: CSSProperties["maxHeight"];
  initiativeTimeFontWeight?: CSSProperties["fontWeight"];
  initiativeLocationFontWeight?: CSSProperties["fontWeight"];
  initiativeNumberOfFontWeight?: CSSProperties["fontWeight"];
  initiativeLocationFontWeight1?: CSSProperties["fontWeight"];
};

const InitiativeCard: FunctionComponent<InitiativeCardType> = ({
  className = "",
  initiativeTitle = "1 Woche Vegan",
  initiativeDay = "30.",
  initiativeMonthAndYear = "Jun 2025",
  initiativeTime = "17:00 - 21:00",
  initiativeNumberOfDays = "Tag 3 von 7",
  initiativeLocation = "Zuhause",
  challengeIcon,
  clockIcon,
  locationIcon,
  initiativeLocation1,
  default1 = false,
  registered = true,
  registerdInitiativeCardBackground,
  defaultInitiativeDetailsWidth,
  defaultInitiativeDetailsAlignSelf,
  registeredInitiativeDetailsAlignSelf,
  registeredInitiativeDetailsWidth,
  registerdInitiativeCardBorder,
  registerdInitiativeCardBackgroundColor,
  initiativeDayMargin,
  initiativeMonthYearFontWeight,
  challengeIconHeight,
  challengeIconMaxHeight,
  initiativeTimeFontWeight,
  initiativeLocationFontWeight,
  initiativeNumberOfFontWeight,
  initiativeLocationFontWeight1,
}) => {
  const registerdInitiativeCardStyle: CSSProperties = useMemo(() => {
    return {
      background: registerdInitiativeCardBackground,
      border: registerdInitiativeCardBorder,
      backgroundColor: registerdInitiativeCardBackgroundColor,
    };
  }, [
    registerdInitiativeCardBackground,
    registerdInitiativeCardBorder,
    registerdInitiativeCardBackgroundColor,
  ]);

  const defaultInitiativeDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: defaultInitiativeDetailsWidth,
      alignSelf: defaultInitiativeDetailsAlignSelf,
    };
  }, [defaultInitiativeDetailsWidth, defaultInitiativeDetailsAlignSelf]);

  const registeredInitiativeDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: registeredInitiativeDetailsAlignSelf,
      width: registeredInitiativeDetailsWidth,
    };
  }, [registeredInitiativeDetailsAlignSelf, registeredInitiativeDetailsWidth]);

  const initiativeDayStyle: CSSProperties = useMemo(() => {
    return {
      margin: initiativeDayMargin,
    };
  }, [initiativeDayMargin]);

  const initiativeMonthYearStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: initiativeMonthYearFontWeight,
    };
  }, [initiativeMonthYearFontWeight]);

  const challengeIconStyle: CSSProperties = useMemo(() => {
    return {
      height: challengeIconHeight,
      maxHeight: challengeIconMaxHeight,
    };
  }, [challengeIconHeight, challengeIconMaxHeight]);

  const initiativeTimeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: initiativeTimeFontWeight,
    };
  }, [initiativeTimeFontWeight]);

  const initiativeLocationStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: initiativeLocationFontWeight,
    };
  }, [initiativeLocationFontWeight]);

  const initiativeNumberOfStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: initiativeNumberOfFontWeight,
    };
  }, [initiativeNumberOfFontWeight]);

  const initiativeLocation1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: initiativeLocationFontWeight1,
    };
  }, [initiativeLocationFontWeight1]);

  return (
    <div
      className={`registerdinitiativecard ${className}`}
      style={registerdInitiativeCardStyle}
    >
      <div className="initiative-date">
        <h3 className="initiative-day" style={initiativeDayStyle}>
          {initiativeDay}
        </h3>
        <div className="initiative-month-year" style={initiativeMonthYearStyle}>
          {initiativeMonthAndYear}
        </div>
      </div>
      <div className="initiative-summary">
        <div className="initiative-header">
          <img
            className="challengeicon"
            loading="lazy"
            alt=""
            src={challengeIcon}
            style={challengeIconStyle}
          />
          <div className="initiative-title">{initiativeTitle}</div>
        </div>
        {!!default1 && (
          <div
            className="default-initiative-details"
            style={defaultInitiativeDetailsStyle}
          >
            <div className="initiative-time">
              <div className="initiative-number-of" style={initiativeTimeStyle}>
                {initiativeTime}
              </div>
            </div>
            <div className="initiative-location">
              <div
                className="initiative-number-of"
                style={initiativeLocationStyle}
              >
                {initiativeLocation}
              </div>
            </div>
          </div>
        )}
        {!!registered && (
          <div
            className="registered-initiative-details"
            style={registeredInitiativeDetailsStyle}
          >
            <div className="initiative-number-of-days">
              <img
                className="clock-icon"
                loading="lazy"
                alt=""
                src={clockIcon}
              />
              <div
                className="initiative-number-of"
                style={initiativeNumberOfStyle}
              >
                {initiativeNumberOfDays}
              </div>
            </div>
            <div className="initiative-number-of-days">
              <img
                className="location-icon"
                loading="lazy"
                alt=""
                src={locationIcon}
              />
              <div
                className="initiative-number-of"
                style={initiativeLocation1Style}
              >
                {initiativeLocation1}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InitiativeCard;
