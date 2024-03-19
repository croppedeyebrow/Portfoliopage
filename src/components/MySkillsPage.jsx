import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import Directing from "../assets/Images/director.png";
import Dblack from "../assets/Images/director-black.png";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/Sociallcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import MySillTitle from "../subComponents/MyskillTitle";

const SkillContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SkillMain = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 24vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Directimg = styled.div`
  width: 40px;
  height: 40px;
  background: url(${Directing}) no-repeat center;
  background-size: cover;

  ${SkillMain}:hover & {
    background: url(${Dblack}) no-repeat center;
    background-size: cover;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
  gap: 1rem;

  ${SkillMain}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.5rem + 0.6vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  ${SkillMain}:hover & {
    color: ${(props) => props.theme.body};
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SkillContainer>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <SkillMain>
          <Title>
            {" "}
            <Directimg src={Directing} alt="디렉터" /> Director{" "}
          </Title>
          <Description>
            I like to make a plan that considers BM and ux, and I like to
            increase efficiency and effectiveness
          </Description>
          <Description>
            <strong>I like to Directing</strong>
            <ul>
              <li>web Product</li>
              <li>Mobile Apps Product</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Notion</li>
              <li>Excell</li>
            </ul>
          </Description>
        </SkillMain>

        <SkillMain>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Spline</li>
            </ul>
          </Description>
        </SkillMain>

        <SkillMain>
          <Title>
            <Develope width={40} height={40} /> Developer : Frontend
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>

          <Description>
            <strong>Front Skills</strong>
            <p>Html, Css, Js, React, Redux, Tailwind, Firebase </p>
            <p>Flutter, Kotlin, React-Native, Python</p>
          </Description>

          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, intellij, pycharm</p>
          </Description>
        </SkillMain>
        <MySillTitle text="SKILLS" top="74%" left="30%" />
      </SkillContainer>
    </ThemeProvider>
  );
};

export default MySkillsPage;
