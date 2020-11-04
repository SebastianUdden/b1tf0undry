import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { H3, Link as LinkUI } from "../pages/shared";
import Author from "./Author";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  width: 300px;
`;
const Img = styled.div`
  height: 150px;
  background-image: ${(p) => `url(${p.src})`};
  background-position: center;
  background-size: cover;
  border-radius: 6px;
`;
const Title = styled(H3)`
  text-align: left;
  margin: 15px 0 5px;
  ${(p) =>
    p.below &&
    `
    margin-top: auto;
  `}
`;
const Description = styled.p`
  margin: 0 0 10px;
`;
const Link = styled(LinkUI)`
  display: inline;
  margin: 5px 0 25px;
  text-align: center;
`;
const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  ${(p) =>
    p.expand &&
    `
    margin-top: 0;
    flex-direction: column;
  `}
`;

export default ({ title, description, href, img, authors }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Project onClick={() => setExpand(!expand)}>
      {img && <Img src={img} />}
      {title && <Title>{title}</Title>}
      {description && expand && <Description>{description}</Description>}
      {href && (
        <Link href={href} target="_blank" onClick={(e) => e.stopPropagation()}>
          Go to project
        </Link>
      )}
      {authors && (
        <>
          {expand && <Title below>b1tf0unders</Title>}
          <Authors expand={expand}>
            {authors.map(({ name, img }) => (
              <Author img={img} name={expand && name} />
            ))}
          </Authors>
        </>
      )}
    </Project>
  );
};
