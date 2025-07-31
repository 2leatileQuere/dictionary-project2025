import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning-card">
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>

      <div className="definition">
        {props.meaning.definitions &&
          props.meaning.definitions.map((definition, index) => (
            <div key={index}>
              <strong>Definition:</strong> {definition.definition}
              {definition.example && (
                <div className="example">
                  <strong>Example:</strong> <em>{definition.example}</em>
                </div>
              )}
              {definition.synonyms && definition.synonyms.length > 0 && (
                <Synonyms synonyms={definition.synonyms} />
              )}
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}
