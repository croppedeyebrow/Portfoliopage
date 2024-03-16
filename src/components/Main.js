import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/Sociallcons";
import { NavLink } from "react-router-dom";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 400;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  font-size: 1rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 46%;
  font-size: 0.88rem;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 40%;
  font-size: 0.88rem;
  left: 2rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
`;

const SkillsPage = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Contact>
          <h2>Say Hi</h2>
        </Contact>

        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>

        <Work to="/work">
          <h2>Work</h2>
        </Work>

        <BottomBar>
          <About to="/about">
            <h2>About Me</h2>
          </About>

          <SkillsPage to="/skills">
            <h2>My Skills</h2>
          </SkillsPage>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
