//최상단 전원 버튼 아이콘 만드는 페이지

import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";
import { NavLink } from "react-router-dom";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 49%;
  transform: translateX(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.8rem;
  height: 2.8rem;

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 255, 0, 0.8);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.9);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

// &는 현재 선택자를 참조합니다. SCSS 또는 Styled Components와 같은 CSS 전처리기에서 사용되며, 이 경우 현재 컴포넌트를 가리킵니다.
// >는 자식 선택자입니다. 이는 바로 아래의 자식 요소만을 선택합니다.
// *:first-child는 모든 요소(*) 중 첫 번째 자식 요소(:first-child)를 선택합니다.

// text-decoration: none;: 텍스트의 밑줄, 취소선 등의 장식을 제거합니다.
// color: inherit;: 부모 요소로부터 글자 색상을 상속받습니다.

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
