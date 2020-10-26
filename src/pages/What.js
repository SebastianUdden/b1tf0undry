import React from "react";
import Page from "../components/Page";
import { Constraint, CTA } from "./shared";
import { Button, H2, LI, P, UL } from "./shared";

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <Constraint>
      <P>
        A small collection of brilliant and motivated individuals, gathering to
        develop new ideas and do brain-workouts on the{" "}
        <Button normal onClick={() => changeTab("when")}>
          first sunday
        </Button>{" "}
        of each month in a casual hackathon-setting.
      </P>
      <H2>Guiding principles</H2>
      <UL>
        <LI>Have fun</LI>
        <LI>Be creative</LI>
        <LI>Collaborate</LI>
        <LI>Build stuff</LI>
        <LI>Go live!</LI>
      </UL>
      <CTA onClick={() => changeTab("why")}>I'm intrigued...</CTA>
    </Constraint>
  </Page>
);
