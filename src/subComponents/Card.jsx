import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const CardBox = styled(motion.li)`
  width: 20rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.body};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px 5px ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1rem + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8rem + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${CardBox}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8rem + 0.3vw);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Demo = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 4rem;
  font-size: calc(1rem + 2vw);

  ${CardBox}:hover & {
    background-color: ${(props) => props.theme.text};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.body};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.div`
  color: inherit;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  ${CardBox}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
      box-shadow: 0 0 20px 5px ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  // 새 탭에서 URL을 열기 위한 함수입니다.
  const openInDemoTab = (url) => {
    // 새 창을 열고, 창의 속성을 설정합니다.
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    // 새 창이 성공적으로 열렸다면, opener 속성을 null로 설정하여
    // 이전 페이지와의 연결을 끊습니다. 이는 보안을 위한 조치입니다.
    if (newWindow) newWindow.opener = null;
  };

  // 새 탭에서 URL을 열기 위한 함수입니다.
  const openInGitTab = (url) => {
    // 새 창을 열고, 창의 속성을 설정합니다.
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    // 새 창이 성공적으로 열렸다면, opener 속성을 null로 설정하여
    // 이전 페이지와의 연결을 끊습니다. 이는 보안을 위한 조치입니다.
    if (newWindow) newWindow.opener = null;
  };

  return (
    <CardBox key={id} variants={Item}>
      <Title>{name}</Title>

      <Description>{description}</Description>

      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>

      <Footer>
        <Demo onClick={() => openInDemoTab(demo)}>Visit</Demo>
        <Git onClick={() => openInGitTab(github)}>
          <Github width={54} height={54} />
        </Git>
      </Footer>
    </CardBox>
  );
};

export default Card;
