import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import music from "../assets/audio/거인을데려와.mp3";
import { useState } from "react";

const SoundBox = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  width: 4rem;
  height: 4rem;
  left: 8rem;
  top: 2.6rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }

  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }

  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }

  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }

  & > *:nth-child(6) {
    animation-delay: 0.7s;
  }

  & > *:nth-child(7) {
    animation-delay: 0.8s;
  }
`;

// &>*:nth-child(1): 이 선택자는 현재 요소(&)의 모든 직계 자식 요소(> *) 중 첫 번째 요소(:nth-child(1))를 선택
// animation-delay: 0.2s;: 이 속성은 애니메이션이 시작하기 전에 대기할 시간을 설정

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const play = keyframes`
      0%{
        transform: scaleY(1);
      }
      50%{
        transform: scaleY(2);
      }
      100%{
        transform: scaleY(1);
      }

   `;

  const play02 = keyframes`
   0%{
     transform: scaleY(2);
   }
   50%{
     transform: scaleY(1);
   }
   100%{
     transform: scaleY(2);
   }

`;

  const Line = styled.span`
    background: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};

    animation: ${play} 1s ease infinite;
    animation-play-state: ${(props) => (props.click ? "running" : "paused")};
    height: 1rem;
    width: 4px;
    margin: 0.1rem;
  `;

  const Line02 = styled.span`
    background: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};

    animation: ${play02} 1s ease infinite;
    animation-play-state: ${(props) => (props.click ? "running" : "paused")};
    height: 1rem;
    width: 4px;
    margin: 0.1rem;
  `;

  return (
    <SoundBox onClick={() => handleClick()}>
      <Line click={click} />
      <Line02 click={click} />
      <Line click={click} />
      <Line02 click={click} />
      <Line click={click} />
      <Line02 click={click} />
      <Line click={click} />

      <audio src={music} ref={ref} loop />
    </SoundBox>
  );
};

export default SoundBar;
