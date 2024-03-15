import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vh;
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

const Main = () => {
  return (
    <MainContainer>
      <Container>Main Component/Page</Container>
    </MainContainer>
  );
};

export default Main;
