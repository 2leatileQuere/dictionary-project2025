import React from "react";

export default function Meaning(props) {
  if (!props.meaning || !props.meaning.definitions || props.meaning.definitions.length === 0) {
    return null;
  }

  return (
    <div className="result-card">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index} className="definition">
          {definition.definition}
        </div>
      ))}
    </div>
  );
}