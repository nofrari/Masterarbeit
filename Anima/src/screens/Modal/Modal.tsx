import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const Modal = (): JSX.Element => {
  return (
    <div className="modal" data-model-id="2871:4164">
      <header className="header-3">
        <img
          className="erika-plant-2"
          alt="Erika plant"
          src="/img/erika-plant-3.png"
        />

        <p className="modal-title">Was ist mit “Ideen bewerten” gemeint?</p>
      </header>

      <div className="flexcontainer">
        <p className="text-i">
          <span className="span">
            Eine Idee ist der erste Schritt zu einer Initiative. <br />
          </span>
        </p>

        <p className="text-i">
          <span className="span">
            ERIKA-Nutzer*innen können Vorschläge einreichen, die zunächst
            unverbindlich sind und nicht direkt umgesetzt werden. Durch Likes
            wird entschieden, ob eine Idee weiterentwickelt wird. Erhält eine
            Idee genug positive Likes, wird sie vervollständigt und kann zu
            einer Initiative werden. <br />
          </span>
        </p>

        <p className="text-i">
          <span className="text-wrapper-5">
            Hier kannst du die Ideen anderer bewerten und so mitbestimmen,
            welche verwirklicht werden.
          </span>
        </p>
      </div>

      <Button
        buttonClassName="button-4"
        buttonName="Verstanden"
        isIconVisible={false}
        to="/homepage"
      />
    </div>
  );
};
