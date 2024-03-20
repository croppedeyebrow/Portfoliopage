import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Notion, Blog, Instagram } from "../components/AllSvgs";
import { color, motion } from "framer-motion";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  gap: 1rem;
  z-index: 3;
 


  &>*::not(:last-child){
    margin: 0 5rem;
    // 현재 요소의 모든 직접적인 자식들 중에서 
    // 마지막 자식을 제외한 모든 요소에 스타일을 적용
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  margin-left: 0.5rem;
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ delay: 0.5 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/croppedeyebrow"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ delay: 0.7 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://cut-eyebrow.tistory.com/"
        >
          <Blog
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ delay: 0.9 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://neulsom-insight.notion.site/29b7a54ac56c46f7bf8a988e86c8ff3c"
        >
          <Notion
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ delay: 1.1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.instagram.com/dev_cordinate_spa/"
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
