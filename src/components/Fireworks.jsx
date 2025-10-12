import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export default function Fireworks() {
  const particlesInit = useCallback(async (engine) => {
    await loadFireworksPreset(engine);
  }, []);
  

  return (
    <Particles
      id="fireworks-canvas"
      init={particlesInit}
      options={{
        preset: "fireworks",

        // --- prevent fullscreen ---
        fullScreen: { enable: false },

        // --- completely transparent ---
       

        // --- remove sound & icons ---
        sounds: {
          enable: false,
          autoPlay: false,
          icons: { enable: false },
        },

        // --- emit fireworks from upper sky ---
        emitters: {
          position: { x: 50, y: 20 }, // near top center
          rate: { quantity: 1, delay: 1.5 },
        },

        // --- important override ---
        style: {
          background: "transparent !important",
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "transparent",
        zIndex: 2,
      }}
    />
  );
}
