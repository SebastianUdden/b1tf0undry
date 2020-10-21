import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { CTA } from "./shared";
import { H2, LI, UL, Constraint } from "./shared";

const About = styled.div`
  opacity: ${(p) => (!p.visible ? 0 : 1)};
  transition: opacity 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

export default ({ changeTab }) => {
  const [hideText, setHideText] = useState(false);

  const onCogClick = (e) => {
    e.stopPropagation();
    setHideText(true);
    setTimeout(() => {
      changeTab("idea-generator");
    }, 300);
  };
  return (
    <Constraint>
      <About visible={!hideText}>
        <Header onCogClick={onCogClick} changeTab={(t) => changeTab(t)} />
        <H2>What you'll get</H2>
        <UL>
          <LI>A lot of fun</LI>
          <LI>An awesome portfolio</LI>
          <LI>Meet like-minded people</LI>
          <LI>Team- and productivity skills</LI>
          <LI>Learn new tech-stacks</LI>
        </UL>
        <H2>What you'll give</H2>
        <UL>
          <LI>A collaborative spirit</LI>
          <LI>Part of one sunday a month</LI>
        </UL>

        <CTA onClick={() => changeTab("how")}>But how does it work?</CTA>
      </About>
    </Constraint>
  );
};
