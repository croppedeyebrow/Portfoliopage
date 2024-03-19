import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import { useRef, useEffect } from "react";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/Sociallcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { Taegeuk } from "./AllSvgs";

const WorkContainer = styled.div`
  background: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const WokrMain = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
  z-index: 1;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 5rem;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const taeguek = useRef(null);

  useEffect(() => {
    const rotate = () => {
      const element = ref.current;
      if (element) {
        element.style.transform = `translateX(${-window.scrollY}px)`;
        taeguek.current.style.transform = `rotate(${-window.scrollY}deg)`;
      }
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <WorkContainer>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <WokrMain ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </WokrMain>

        <Rotate ref={taeguek}>
          <Taegeuk width={70} height={70} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="5%" right="10%" />
      </WorkContainer>
    </ThemeProvider>
  );
};

export default WorkPage;
