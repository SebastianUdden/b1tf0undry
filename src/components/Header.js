import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { H1 } from "../pages/shared";
import Cog from "./Cog";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  border-bottom: 1px solid #efefef;
  background-color: ${colors.background};
  justify-content: center;
  align-items: center;
`;

export default ({ onCogClick, changeTab }) => {
  return (
    <Header>
      <H1 onClick={() => changeTab("what")}>
        b1tf
        <Cog
          color="white"
          size="calc(21px + 2vmin)"
          margin="0 0 -0.23rem 0"
          onClick={onCogClick}
        />
        undry
      </H1>
    </Header>
  );
};
