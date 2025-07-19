import { FunctionComponent } from "react";
import "./Select.css";

export type SelectType = {
  className?: string;
  selectLabel?: string;
};

const Select: FunctionComponent<SelectType> = ({
  className = "",
  selectLabel = "Kategorie *",
}) => {
  return (
    <div className={`select ${className}`}>
      <div className="select-label">{selectLabel}</div>
      <div className="select-input">
        <b className="select-options">-</b>
        <img className="down-icon" alt="" src="Down_Icon.png" />
      </div>
    </div>
  );
};

export default Select;
