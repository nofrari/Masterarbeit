import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Modal.css";

export type ModalType = {
  className?: string;
  buttonName?: string;
  backIcon?: string;
  isIconVisible?: boolean;
  isNameVisible?: boolean;
  backButtonMargin?: string;
  backButtonPosition?: string;
  backButtonTop?: string;
  backButtonLeft?: string;
  backButtonPadding?: string;
  backButtonBorder?: string;
  backButtonWidth?: string;
  buttonNameWidth?: string;
  buttonNameFlex?: string;
  modalTitle?: string;
  modalContent?: string;
};

const Modal: FunctionComponent<ModalType> = ({
  className = "",
  buttonName,
  backIcon,
  isIconVisible,
  isNameVisible,
  backButtonMargin,
  backButtonPosition,
  backButtonTop,
  backButtonLeft,
  backButtonPadding,
  backButtonBorder,
  backButtonWidth,
  buttonNameWidth,
  buttonNameFlex,
  modalTitle = "Was ist mit “Ideen bewerten” gemeint?",
  modalContent = "Eine Idee ist der erste Schritt zu einer Initiative. \nERIKA-Nutzer*innen können Vorschläge einreichen, die zunächst unverbindlich sind und nicht direkt umgesetzt werden. Durch Likes wird entschieden, ob eine Idee weiterentwickelt wird. Erhält eine Idee genug positive Likes, wird sie vervollständigt und kann zu einer Initiative werden. \nHier kannst du die Ideen anderer bewerten und so mitbestimmen, welche verwirklicht werden.",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={`modal ${className}`}>
      <div className="header2">
        <img
          className="erika-plant-icon"
          loading="lazy"
          alt=""
          src="Erika Plant.svg"
        />
        <b className="modal-title">{modalTitle}</b>
      </div>
      <section className="modal-content">{modalContent}</section>
      <Button
        buttonName={buttonName}
        backIcon={backIcon}
        isIconVisible={isIconVisible}
        isNameVisible={isNameVisible}
        backButtonMargin={backButtonMargin}
        backButtonPosition={backButtonPosition}
        backButtonTop={backButtonTop}
        backButtonLeft={backButtonLeft}
        backButtonPadding={backButtonPadding}
        backButtonBorder={backButtonBorder}
        backButtonWidth={backButtonWidth}
        buttonNameWidth={buttonNameWidth}
        buttonNameFlex={buttonNameFlex}
        onBackButtonContainerClick={onButtonClick}
      />
    </div>
  );
};

export default Modal;
