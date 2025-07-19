import { FunctionComponent } from "react";
import "./TextField.css";

export type TextFieldType = {
  className?: string;
  textFieldLabel?: string;
};

const TextField: FunctionComponent<TextFieldType> = ({
  className = "",
  textFieldLabel = "Titel *",
}) => {
  return (
    <div className={`textfield ${className}`}>
      <div className="text-field-label">{textFieldLabel}</div>
      <textarea className="text-field-input" rows={2} cols={17} />
    </div>
  );
};

export default TextField;
