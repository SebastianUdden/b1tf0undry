import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #efefef;
  background-color: ${colors.background};
  @media (min-width: 860px) {
    top: 95px;
    justify-content: flex-start;
    border-top: none;
    border-right: 1px solid #efefef;
    right: auto;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 20px;
  font-size: 16px;
  width: 100%;
  background-color: ${colors.background};
  color: inherit;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  @media (min-width: 860px) {
    padding: 20px 60px;
  }
`;
const Text = styled.span`
  ${(p) =>
    p.selected &&
    `
    padding-bottom: 2px;
    border-bottom: 1px solid white;
  `}
`;

const Tab = ({ name, selected, onChange }) => (
  <Button onClick={() => onChange(name)} selected={selected === name}>
    <Text selected={selected === name}>{name}</Text>
  </Button>
);

export default ({ selected, onChange }) => {
  return (
    <Navigation>
      <Tab name="what" onChange={onChange} selected={selected} />
      <Tab name="why" onChange={onChange} selected={selected} />
      <Tab name="how" onChange={onChange} selected={selected} />
      <Tab name="when" onChange={onChange} selected={selected} />
    </Navigation>
  );
};
