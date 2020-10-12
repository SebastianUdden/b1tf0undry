import React, { useState } from "react";
import styled from "styled-components";
import Cog from "./Cog";
import { H1, H2, P, Button, Constraint, Footer } from "./shared";

const Contact = styled.div`
  max-width: 537px;
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export default ({ changeTab }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = e => {
    e.stopPropagation()
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  return (
    <Constraint>
      <Contact visible={!hideText}>
        <H1 onClick={() => changeTab("home")}>
          b1tf
          <Cog color="white" size="calc(21px + 2vmin)" margin="0 0 -0.23rem 0" onClick={onCogClick} />
          undry
        </H1>
        <H2>So you want join us?</H2>
        <P>Awesome, though we are a small group by design we are always on the lookout for potential new members. Contact us and let us know why you'd make a great b1tf0under!</P> 
        <Footer>
          <Button onClick={() => changeTab("home")}>Back</Button>
        </Footer>
      </Contact>
    </Constraint>
  );
};
