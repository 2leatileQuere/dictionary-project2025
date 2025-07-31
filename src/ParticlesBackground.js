import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 1, direction: "none", outModes: "out" },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    },
    detectRetina: true,
  };

  return <Particles init={particlesInit} options={options} />;
}
