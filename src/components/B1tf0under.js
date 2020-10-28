import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import ExternalLinkIcon from "./ExternalLinkIcon";

const B1tf0under = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.alternateBackground};
  border-radius: 6px;
  padding: 2rem 2rem;
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  margin: 10px;
  max-width: 300px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Title = styled.h3`
  text-align: right;
  margin-left: 30px;
`;
const Description = styled.p`
  margin: 0.5rem 0 1rem;
`;
const Link = styled.a`
  color: orange;
  text-decoration: none;
  margin: 5px 0;
`;
const Img = styled.img`
  text-decoration: none;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export default ({ img, name, description, links }) => {
  const [expand, setExpand] = useState(false);
  return (
    <B1tf0under onClick={() => setExpand(!expand)}>
      <Row>
        <Img src={img} />
        <Title>{name}</Title>
      </Row>
      {expand && description && <Description>{description}</Description>}
      {expand &&
        links &&
        links.map((link) => (
          <Link
            onClick={(e) => e.stopPropagation()}
            href={link.href}
            target="_blank"
          >
            {link.title} <ExternalLinkIcon color="orange" />
          </Link>
        ))}
    </B1tf0under>
  );
};
