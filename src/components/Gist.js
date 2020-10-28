import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import ExternalLinkIcon from "./ExternalLinkIcon";
import Author from "./Author";

const Gist = styled.div`
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
`;
const Title = styled.h3`
  margin: 0 0 0 0;
`;
const Description = styled.p`
  margin: 0.5rem 0 1rem;
`;
const Link = styled.a`
  color: orange;
  text-decoration: none;
`;
const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${(p) =>
    p.expand &&
    `
    flex-direction: column;
  `}
`;

export default ({ title, description, href, authors }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Gist onClick={() => setExpand(!expand)}>
      <Title onClick={(e) => e.stopPropagation()}>
        <Link href={href} target="_blank">
          {title || href} <ExternalLinkIcon color="orange" />
        </Link>
      </Title>
      {description && (
        <Description>
          {expand ? description : `${description.substr(0, 50)}...`}
        </Description>
      )}
      {authors && (
        <>
          {expand && <Title>b1tf0unders</Title>}
          <Authors expand={expand}>
            {authors.map(({ name, img }) => (
              <Author img={img} name={expand && name} />
            ))}
          </Authors>
        </>
      )}
    </Gist>
  );
};
