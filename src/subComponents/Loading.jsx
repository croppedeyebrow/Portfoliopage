import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  z-index: 20;
`;

const LoadingPage = () => {
  return (
    <Container>
      <h1>
        {"Loading...".split("").map((char, index) => {
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          );
        })}
      </h1>
    </Container>
  );
};

export default LoadingPage;
