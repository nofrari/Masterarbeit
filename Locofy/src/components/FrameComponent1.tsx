import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`background-parent ${className}`}>
      <div className="background" />
      <div className="progress-sill">
        <img className="sill-icon" alt="" src="Sill.svg" />
        <img className="foreshadowing-icon" alt="" src="Foreshadowing.svg" />
      </div>
      <div className="erika-wrapper">
        <h3 className="erika">ERIKA</h3>
      </div>
      <div className="progress-details">
        <div className="stufe-1-von-7-wrapper">
          <div className="stufe-1-von-container">
            <b>Stufe 1</b>
            <span className="von-7"> von 7</span>
          </div>
        </div>
        <div className="sun-area">
          <img className="sun-icon" loading="lazy" alt="" src="Sun.png" />
          <div className="sun-area-inner">
            <div className="erika-parent">
              <img className="erika-icon" alt="" src="Erika.svg" />
              <div className="speechbubble">
                <div className="speech-container">
                  <img
                    className="vector-icon"
                    loading="lazy"
                    alt=""
                    src="Vector.svg"
                  />
                  <div className="text">Klick mich!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
