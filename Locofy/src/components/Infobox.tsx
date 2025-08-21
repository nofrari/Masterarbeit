import { FunctionComponent } from "react";
import "./Infobox.css";

export type InfoboxType = {
  className?: string;
  content?: string;
};

const Infobox: FunctionComponent<InfoboxType> = ({
  className = "",
  content = "Die Initiativen, bei denen du dich angemeldet hast, sind in Lila markiert.",
}) => {
  return (
    <div className={`infobox ${className}`}>
      <img
        className="erika-plant-icon1"
        loading="lazy"
        alt=""
        src="Erika Plant.svg"
      />
      <b className="color-coding-information">{content}</b>
    </div>
  );
};

export default Infobox;
