import React, { useState } from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/Sociallcons";
import { NavLink } from "react-router-dom";
import { Taegeuk } from "./AllSvgs";
import { keyframes } from "styled-components";
import Intro from "./Intro";
import { motion } from "framer-motion";

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
  color: ${(props) => (props.active ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 42%;
  font-size: 0.88rem;
  left: 2rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
//props.click의 값에 따라 현재 선택된 요소의 색상을 변경하는 역할
//props.click의 값이 true라면 props.theme.body의 색상을 반환하고, 그렇지 않다면 props.theme.text의 색상을 반환

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
  color: ${(props) => (props.active ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 1;
`;

const SkillsPage = styled(NavLink)`
  color: ${(props) => (props.active ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }

`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  //트랜지션 효과의 지속 시간을 1s로 설정
  //ease = 시작할때는 느리게, 중간에는 빠르게, 끝날때는 느리게 변화하도록 설정

  &>:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }


  &>:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    // props.click의 값에 따라 현재 선택된 요소의 마지막 자식 요소를 보이게 하거나 숨기는 역할
    padding-top: 1rem;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

//height 0.5s ease는 height 속성의 변화에 대해 트랜지션 효과를 적용하고, 지속 시간을 0.5초로 설정
//변화가 시작할 때 느리게, 그 다음에 빠르게, 마지막에 다시 느리게 변화

//width 1s ease 0.5s는 width 속성의 변화에 대해 트랜지션 효과를 적용하고, 지속 시간을 1초로 설정.
//트랜지션 효과가 시작하기 전에 0.5초의 지연 시간을 설정
const Main = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  // click이 true라면 setClick(!click)는 setClick(false)와 같고,
  //  click이 false라면 setClick(!click)는 setClick(true)와 같습니다.
  // handleClick 함수는 click 상태를 토글하는 역할을 합니다.
  //  이 함수가 호출되면 click 상태는 true에서 false로, 또는 false에서 true로 변경

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <Taegeuk
            onClick={() => handleClick()}
            width={click ? 120 : 240}
            height={click ? 120 : 240}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>

        <Contact target="_blank" to={{ pathname: "lee940706@gmail.com" }}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say Hi
          </motion.h2>
        </Contact>

        <Blog to="/blog">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </Blog>

        <Work to="/work" isActive={() => click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About to="/about" isActive={() => click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About Me
            </motion.h2>
          </About>

          <SkillsPage to="/skills" isActive={() => click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills
            </motion.h2>
          </SkillsPage>
        </BottomBar>
      </Container>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
