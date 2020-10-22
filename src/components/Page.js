import React, { useState } from "react";
import styled from "styled-components";
import { Constraint } from "../pages/shared";
import Header from "./Header";

const Body = styled.div`
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
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
    <Constraint>
      <Header onCogClick={onCogClick} changeTab={(t) => changeTab(t)} />
      <Body visible={!hideText}>{children}</Body>
    </Constraint>
  );
};
