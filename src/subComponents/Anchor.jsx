import React, { useRef } from "react";

import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

const AnchorContainer = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  return (
    <AnchorContainer>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
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
        <Anchor width={70} height={25} fill="currentColor" />
      </Slider>
    </AnchorContainer>
  );
};

export default AnchorComponent;
