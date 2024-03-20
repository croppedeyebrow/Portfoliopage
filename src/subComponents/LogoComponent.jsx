import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import { useState } from "react";
import Loading from "./Loading";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/Portfoliopage");
    }, 1000);
  };

  // 로딩 상태에 따라 다른 컴포넌트를 렌더링합니다.
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Logo color={props.theme} onClick={handleClick}>
      {/* 코드지휘소 */}
      CDC
    </Logo>
  );
};

export default LogoComponent;
