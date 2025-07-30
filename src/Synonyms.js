import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul className="Synonyms">
          {props.synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
