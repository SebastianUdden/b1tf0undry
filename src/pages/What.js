import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { CTA } from "./shared";
import { Button, H2, LI, P, UL } from "./shared";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export default ({ changeTab }) => {
  return (
    <Page changeTab={changeTab}>
      <P>
        A small collection of brilliant and motivated individuals, gathering to
        develop new ideas and do brain-workouts on the{" "}
        <Button normal onClick={() => changeTab("when")}>
          first sunday
        </Button>{" "}
        of each month in a casual hackathon-setting.
      </P>
      <Main>
        <H2>Guiding principles</H2>
        <UL>
          <LI>Have fun</LI>
          <LI>Be creative</LI>
          <LI>Collaborate</LI>
          <LI>Build stuff</LI>
          <LI>Go live!</LI>
        </UL>
        <CTA onClick={() => changeTab("why")}>I'm intrigued...</CTA>
      </Main>
    </Page>
  );
};
