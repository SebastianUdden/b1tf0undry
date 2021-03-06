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
  overflow-x: hidden;
  @media (min-width: 460px) {
    overflow-x: hidden;
  }
  @media (min-width: 860px) {
    top: 91px;
    justify-content: flex-start;
    border-top: none;
    border-right: 1px solid #efefef;
    right: auto;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 20px 10px;
  font-size: 13px;
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
      <Tab name="projects" onChange={onChange} selected={selected} />
      <Tab name="who" onChange={onChange} selected={selected} />
    </Navigation>
  );
};
