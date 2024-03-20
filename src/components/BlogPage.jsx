import React, { useEffect } from "react";
import styled from "styled-components";
import backimg from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/Sociallcons";
import { useState } from "react";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle2 from "../subComponents/BigTitle2";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  background-image: url(${backimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba})`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const BlockLine = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  z-index: 5;
`;

//''가 아니라 ``를 사용하는 거라는 점 주의!

const BlogPage = () => {
  // "numbers"라는 상태 변수를 선언하고 초기값을 0으로 설정합니다.
  // "setnumbers"는 이 상태를 업데이트하는 함수입니다.
  const [numbers, setnumbers] = useState(0);

  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 실행할 코드를 정의합니다.
  // 이 코드는 한 번만 실행되며, 컴포넌트가 업데이트될 때는 실행되지 않습니다.
  useEffect(() => {
    // 브라우저 창의 높이에서 70을 빼고 그 결과를 30으로 나눕니다.
    // 이는 페이지에 표시할 항목의 수를 계산하는 데 사용될 수 있습니다.
    const num = (window.innerHeight - 70) / 30;

    // 계산된 값을 정수로 변환하고 "numbers" 상태를 업데이트합니다.
    setnumbers(parseInt(num));
  }, []); // 빈 배열은 이 useEffect가 한 번만 실행되어야 함을 의미합니다.

  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />

        <Center>
          <BlockLine>
            {Blogs.map((blog, index) => {
              return (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <BlogComponent blog={blog} />
                </motion.div>
              );
            })}
          </BlockLine>
        </Center>
        <BigTitle2 text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
