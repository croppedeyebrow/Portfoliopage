import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

import { useNavigate } from "react-router-dom";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  &:tap {
    scale: 0.9;
  }
`;

const LogoComponent = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Logo color={props.theme} onClick={handleClick}>
      {/* 코드지휘소 */}
      CDC
    </Logo>
  );
};

export default LogoComponent;
