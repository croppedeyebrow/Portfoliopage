import React, { useEffect } from "react";
import p5 from "p5";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = () => {
  useEffect(() => {
    new p5((p) => {
      let particles = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        for (let i = 0; i < 240; i++) {
          particles[i] = new Particle(p.random(p.width), p.random(p.height), p);
        }
      };
      p.draw = () => {
        p.clear(); // Add this line

        for (let i = 0; i < particles.length; i += 3) {
          particles[i].update();
          particles[i].show();
        }
      };

      class Particle {
        constructor(x, y, p) {
          this.x = x;
          this.y = y;
          this.p = p;
        }

        update() {
          let dx = this.p.mouseX - this.x;
          let dy = this.p.mouseY - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50) {
            this.x -= (dx / distance) * 5;
            this.y -= (dy / distance) * 5;
          }

          this.x += 0.5;
          this.y += 0.5;

          if (this.x > this.p.width) {
            this.x = 0;
          }
          if (this.y > this.p.height) {
            this.y = 0;
          }
        }

        show() {
          this.p.stroke(200);
          this.p.strokeWeight(4);
          this.p.triangle(
            this.x,
            this.y,
            this.x + 10,
            this.y,
            this.x + 5,
            this.y + 10
          );
        }
      }
    }, "canvas-container");
  }, []);

  return <Box id="canvas-container"></Box>;
};

export default ParticleComponent;
