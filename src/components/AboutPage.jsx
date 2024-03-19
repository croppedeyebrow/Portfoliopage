import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import Directing from "../assets/Images/director.png";
import Dblack from "../assets/Images/director-black.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/Sociallcons";
import PowerButton from "../subComponents/PowerButton";
import astronaut from "../assets/Images/spaceman.png";
import ParticleComponent from "../subComponents/ParticleComponent";

const SkillContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% {transform:translateY(-10px)}
50% {transform:translateY(15px) translateX(15px)}
100% {transform:translateY(-10px)}

`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(5px);

  position: absolute;
  left: calc(10rem + 2vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SkillContainer>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="Spaceman" />
        </Spaceman>

        <Main>
          I'm a front-end developer located in SouthKorea. <br></br> <br></br>I
          love to create simple yet beautiful websites with great user
          experience. <br></br> <br></br>I am a developer from a content
          marketer. <br></br>I think logical planning, design, and technology
          change the world. <br></br>
          <br></br>
          I'm interested in front-end stacks like trying new things and building
          projects with a solid business model. <br></br>
          <br></br>
          You are always welcome to contact us through social media. <br></br>
          <br></br>
          You have nothing to lose, Everything to gain. Just do it!! <br></br>{" "}
        </Main>
      </SkillContainer>
    </ThemeProvider>
  );
};

export default AboutPage;
