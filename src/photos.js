import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="photo-grid">
          {props.photos.map(function (photo, index) {
            return (
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={photo.src.landscape}
                  alt="word"
                  className="img-fluid"
                />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
