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

        for (let i = 0; i < 130; i++) {
          particles[i] = new Particle(p.random(p.width), p.random(p.height), p);
        }
      };
      p.draw = () => {
        p.background(255);

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
          this.x += 0.5;
          this.y += 0.5;

          // If the particle goes off the edge of the screen, wrap it around to the other side
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
          this.p.beginShape();
          this.p.vertex(this.x, this.y);
          this.p.vertex(this.x + 10, this.y + 20);
          this.p.vertex(this.x - 10, this.y + 20);
          this.p.endShape(this.p.CLOSE);
        }
      }
    }, "canvas-container");
  }, []);

  return <Box id="canvas-container"></Box>;
};

export default ParticleComponent;
