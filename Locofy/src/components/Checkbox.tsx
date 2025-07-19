import { FunctionComponent } from "react";
import "./Checkbox.css";

export type CheckboxType = {
  className?: string;
  checkboxLabel?: string;
};

const Checkbox: FunctionComponent<CheckboxType> = ({
  className = "",
  checkboxLabel = "Ich kann die Idee selbst umsetzen.",
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <div className="checkbox-input" />
      <div className="checkbox-label">{checkboxLabel}</div>
    </div>
  );
};

export default Checkbox;
