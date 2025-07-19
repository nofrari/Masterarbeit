import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import "./SubmitIdea.css";

const SubmitIdea: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="submitidea">
      <div className="header1">
        <Button
          isIconVisible
          buttonName="Name"
          isNameVisible={false}
          onBackButtonContainerClick={onBackButtonContainerClick}
          backIcon="BackIcon.svg"
        />
        <h3 className="form-title">Idee einreichen</h3>
      </div>
      <section className="form">
        <b className="required-info">* Pflichtfelder</b>
        <TextField textFieldLabel="Titel *" />
        <TextArea textAreaLabel="Beschreibung *" />
        <Select selectLabel="Kategorie *" />
        <TextArea
          textAreaLabel="Warum ist die Initiative gut gegen die Klimakrise? *"
          textAreaInputHeight="unset"
        />
        <Checkbox checkboxLabel="Ich kann die Idee selbst umsetzen." />
        <Button
          isIconVisible={false}
          buttonName="Einreichen"
          isNameVisible
          backButtonMargin="unset"
          backButtonPosition="unset"
          backButtonTop="unset"
          backButtonLeft="unset"
          backButtonPadding="12px 25px"
          backButtonBorder="none"
          backButtonWidth="144px"
          backIcon="Button Icon.svg"
          buttonNameWidth="unset"
          buttonNameFlex="1"
        />
      </section>
    </div>
  );
};

export default SubmitIdea;
