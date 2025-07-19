import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export type ButtonType = {
  className?: string;
  isIconVisible?: boolean;
  buttonName?: string;
  isNameVisible?: boolean;
  backIcon?: string;

  /** Style props */
  backButtonMargin?: CSSProperties["margin"];
  backButtonPosition?: CSSProperties["position"];
  backButtonTop?: CSSProperties["top"];
  backButtonLeft?: CSSProperties["left"];
  backButtonPadding?: CSSProperties["padding"];
  backButtonBorder?: CSSProperties["border"];
  backButtonWidth?: CSSProperties["width"];
  buttonNameWidth?: CSSProperties["width"];
  buttonNameFlex?: CSSProperties["flex"];

  /** Action props */
  onBackButtonContainerClick?: () => void;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  isIconVisible = true,
  buttonName = "Name",
  isNameVisible = false,
  onBackButtonContainerClick,
  backButtonMargin,
  backButtonPosition,
  backButtonTop,
  backButtonLeft,
  backButtonPadding,
  backButtonBorder,
  backButtonWidth,
  backIcon,
  buttonNameWidth,
  buttonNameFlex,
}) => {
  const backButtonStyle: CSSProperties = useMemo(() => {
    return {
      margin: backButtonMargin,
      position: backButtonPosition,
      top: backButtonTop,
      left: backButtonLeft,
      padding: backButtonPadding,
      border: backButtonBorder,
      width: backButtonWidth,
    };
  }, [
    backButtonMargin,
    backButtonPosition,
    backButtonTop,
    backButtonLeft,
    backButtonPadding,
    backButtonBorder,
    backButtonWidth,
  ]);

  const buttonNameStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonNameWidth,
      flex: buttonNameFlex,
    };
  }, [buttonNameWidth, buttonNameFlex]);

  const navigate = useNavigate();

  const onBackButtonContainerClick1 = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div
      className={`back-button ${className}`}
      onClick={onBackButtonContainerClick}
      style={backButtonStyle}
    >
      {!!isIconVisible && (
        <img className="backicon" loading="lazy" alt="" src={backIcon} />
      )}
      {!!isNameVisible && (
        <div className="button-name" style={buttonNameStyle}>
          {buttonName}
        </div>
      )}
    </div>
  );
};

export default Button;
