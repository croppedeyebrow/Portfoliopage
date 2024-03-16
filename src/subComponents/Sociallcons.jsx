import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Notion, Blog, Instagram } from "../components/AllSvgs";
import { color } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  &>*::not(:last-child){
    margin: 0 5rem;
    // 현재 요소의 모든 직접적인 자식들 중에서 
    // 마지막 자식을 제외한 모든 요소에 스타일을 적용
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
  margin-left: 0.5rem;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/croppedeyebrow"
        >
          <Github width={25} height={25} fill="currentColor" />
        </a>
      </div>

      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://cut-eyebrow.tistory.com/"
        >
          <Blog width={25} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://neulsom-insight.notion.site/29b7a54ac56c46f7bf8a988e86c8ff3c"
        >
          <Notion width={25} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.instagram.com/dev_cordinate_spa/"
        >
          <Instagram width={25} height={25} fill="currentColor" />
        </a>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
