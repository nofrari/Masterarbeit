import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TextArea.css";

export type TextAreaType = {
  className?: string;
  textAreaLabel?: string;
  textAreaInputRows?: number;
  textAreaInputCols?: number;

  /** Style props */
  textAreaInputHeight?: CSSProperties["height"];
};

const TextArea: FunctionComponent<TextAreaType> = ({
  className = "",
  textAreaLabel = "Beschreibung *",
  textAreaInputRows,
  textAreaInputCols,
  textAreaInputHeight,
}) => {
  const textAreaInputStyle: CSSProperties = useMemo(() => {
    return {
      height: textAreaInputHeight,
    };
  }, [textAreaInputHeight]);

  return (
    <div className={`textarea ${className}`}>
      <div className="text-area-label">{textAreaLabel}</div>
      <textarea
        className="text-area-input"
        rows={textAreaInputRows}
        cols={textAreaInputCols}
        style={textAreaInputStyle}
      />
    </div>
  );
};

export default TextArea;
