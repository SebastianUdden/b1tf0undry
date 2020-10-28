import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { H2 } from "./shared";
import { B1TF0UNDERS } from "../constants/b1tf0unders";
import B1tf0under from "../components/B1tf0under";

const B1tf0unders = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

export default ({ changeTab }) => (
  <Page changeTab={changeTab}>
    <H2>b1tf0unders</H2>
    <B1tf0unders>
      {Object.values(B1TF0UNDERS).map((b) => (
        <B1tf0under {...b} />
      ))}
    </B1tf0unders>
  </Page>
);
