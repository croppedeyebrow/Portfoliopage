import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  z-index: 0;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: rgba(252, 246, 244, 0.1);
  font-size: calc(10rem + 5vw);
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
