import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import Project from "../components/Project";
import { PORTFOLIO } from "../constants/portfolio";
import { GISTS } from "../constants/gists";
import { H2 } from "./shared";
import Gist from "../components/Gist";

const Portfolio = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <H2>The portfolio</H2>
    <Portfolio>
      {PORTFOLIO.map((p) => (
        <Project {...p} />
      ))}
    </Portfolio>
    <H2>Gists</H2>
    <Portfolio>
      {GISTS.map((g) => (
        <Gist {...g} />
      ))}
    </Portfolio>
  </Page>
);
