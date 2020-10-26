import React from "react";
import Page from "../components/Page";
import { Constraint, CTA } from "./shared";
import { H2, LI, UL } from "./shared";

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <Constraint>
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
    </Constraint>
  </Page>
);
