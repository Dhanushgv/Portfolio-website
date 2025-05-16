import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#66aaff" },
          links: {
            color: "#66aaff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { random: true, value: 3 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
