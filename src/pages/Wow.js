import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import Project from "../components/Project";
import { PORTFOLIO } from "../constants/portfolio";
import { H2 } from "./shared";

const Portfolio = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <H2>The portfolio</H2>
    <Portfolio>
      {PORTFOLIO.map((p) => (
        <Project {...p} />
      ))}
    </Portfolio>
  </Page>
);
