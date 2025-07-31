import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
          <Phonetic phonetic={props.results.phonetic} />
        )}
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
