import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

const AnchorContainer = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(140deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = (props) => {
  // 우리가 조작할 요소들에 대한 참조를 생성합니다
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  //useRef는 React의 Hook 중 하나로, 컴포넌트 내에서 변경 가능한 값을 유지하고 싶을 때 사용합니다. 이 값은 컴포넌트가 리렌더링되어도 유지됩니다.
  //ref는 스크롤에 따라 변환(transform) 스타일을 변경하는 데 사용되는 요소에 대한 참조입니다.
  // hiddenRef는 스크롤 위치에 따라 표시 여부를 변경하는 데 사용되는 요소에 대한 참조입니다.

  // 컴포넌트가 마운트될 때 이벤트 리스너를 추가하기 위해 useEffect 훅을 사용합니다
  useEffect(() => {
    // 사용자가 스크롤할 때마다 이 함수가 호출됩니다
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다
      const scrollPosition = window.scrollY;

      // 창의 높이를 가져옵니다
      const windowSize = window.innerHeight;

      // body의 총 높이를 가져옵니다
      const bodyHeight = document.body.offsetHeight;

      // body 높이와 스크롤 위치 및 창 크기의 합 사이의 차이를 계산합니다
      const diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      // 차이를 백분율로 변환합니다
      const diffP = (diff * 100) / (bodyHeight - windowSize);

      // ref 요소의 transform 스타일을 변경하여 스크롤에 따라 이동하게 합니다
      ref.current.style.transform = `translateY(${-diffP}%)`;

      // 스크롤이 5보다 크면 hiddenRef 요소를 숨깁니다
      if (window.scrollY > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        // 그렇지 않으면 hiddenRef 요소를 보여줍니다
        hiddenRef.current.style.display = "block";
      }
    };

    // 스크롤 이벤트 리스너를 추가합니다
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거합니다
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnchorContainer>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </AnchorContainer>
  );
};

export default AnchorComponent;
