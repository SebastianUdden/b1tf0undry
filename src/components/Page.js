import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
`;

const Body = styled.div`
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  max-width: 540px;
  margin: 3vh auto;
  padding: 0 5vw 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;

  @media (min-width: 860px) {
    padding: 0 0 10vh;
    max-width: 70vw;
    padding-top: 100px;
  }
`;

export default ({ changeTab, children }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = () => {
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  return (
    <Wrapper>
      <Header onCogClick={onCogClick} changeTab={(t) => changeTab(t)} />
      <Body visible={!hideText}>{children}</Body>
    </Wrapper>
  );
};
