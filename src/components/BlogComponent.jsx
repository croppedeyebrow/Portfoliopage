import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BlogContainer = styled.div`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover; // 이미지가 컨테이너에 꽉 차게 설정
  height: 60%;
  width: 100%;
  border: 1px solid transparent;
  background-position: center center;

  ${BlogContainer}:hover & {
    border: 1.4px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${BlogContainer}:hover & {
    border-bottom: 1.4px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const BlogComponent = (props) => {
  // 블로그 포스트의 속성을 추출합니다.
  const { name, tags, date, imgSrc, link } = props.blog;

  // 새 탭에서 URL을 열기 위한 함수입니다.
  const openInNewTab = (url) => {
    // 새 창을 열고, 창의 속성을 설정합니다.
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    // 새 창이 성공적으로 열렸다면, opener 속성을 null로 설정하여
    // 이전 페이지와의 연결을 끊습니다. 이는 보안을 위한 조치입니다.
    if (newWindow) newWindow.opener = null;
  };

  // BlogContainer 컴포넌트를 반환합니다.
  // onClick 이벤트가 발생하면, openInNewTab 함수를 호출하여
  // link에 지정된 URL을 새 탭에서 엽니다.
  return (
    <BlogContainer onClick={() => openInNewTab(link)}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <HashTags>
        {tags.map((t, id) => {
          return <Tag key={id}>{t}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </BlogContainer>
  );
};

export default BlogComponent;
