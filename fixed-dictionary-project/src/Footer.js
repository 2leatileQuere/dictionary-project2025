import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        Built by Letty © {new Date().getFullYear()} —{" "}
        <a
          href="https://github.com/2leatileQuere"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/leatile-qu%C3%A9r%C3%A9-53532b1a8/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>{" "}
        <a
          href="https://dictionary-project2025.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Netlify"
        >
          <i className="fas fa-globe"></i>
        </a>
      </p>
    </footer>
  );
}
