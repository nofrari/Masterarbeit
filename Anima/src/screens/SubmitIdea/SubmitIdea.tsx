import React from "react";
import { BackIcon } from "../../components/BackIcon";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import { TextField } from "../../components/TextField";
import "./style.css";

export const SubmitIdea = (): JSX.Element => {
  return (
    <div className="submit-idea" data-model-id="2830:858">
      <header className="header-2">
        <Button
          buttonClassName="back-button"
          isNameVisible={false}
          override={<BackIcon className="back-icon-instance" />}
          to="/homepage"
        />
        <div className="form-title">Idee einreichen</div>
      </header>

      <div className="form-wrapper">
        <div className="form">
          <div className="required-info">* Pflichtfelder</div>

          <TextField
            className="design-component-instance-node-3"
            textFieldLabel="Titel *"
          />
          <TextArea
            className="design-component-instance-node-3"
            textAreaLabel="Beschreibung *"
          />
          <Select
            className="design-component-instance-node-3"
            selectLabel="Kategorie *"
          />
          <TextArea
            className="design-component-instance-node-3"
            textAreaLabel="Warum ist die Initiative gut gegen die Klimakrise? *"
          />
          <Checkbox
            checkboxLabel="Ich kann die Idee selbst umsetzen."
            className="design-component-instance-node-3"
          />
          <Button
            buttonClassName="button-instance"
            buttonName="Einreichen"
            isIconVisible={false}
          />
        </div>
      </div>
    </div>
  );
};
