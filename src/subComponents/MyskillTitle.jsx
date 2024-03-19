import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  z-index: 2;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: rgba(0, 0, 0, 0.1);
  font-size: calc(10rem + 5vw);
`;

const MySillTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default MySillTitle;
