import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  z-index: 0;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: rgba(0, 0, 0, 0.15);
  font-size: calc(10rem + 5vw);
`;

const BigTitle2 = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle2;
