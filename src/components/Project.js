import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { Link as LinkUI } from "../pages/shared";
import Author from "./Author";

const Portfolio = styled.div`
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
const Img = styled.div`
  height: 150px;
  background-image: ${(p) => `url(${p.src})`};
  background-position: center;
  background-size: cover;
  border-radius: 6px;
`;
const Title = styled.h3`
  margin: 15px 0 5px;
`;
const Description = styled.p`
  margin: 0 0 10px;
`;
const Link = styled(LinkUI)`
  display: inline-block;
  margin: 5px 0 15px;
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

export default ({ title, description, href, img, authors }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Portfolio onClick={() => setExpand(!expand)}>
      {img && <Img src={img} />}
      {title && <Title>{title}</Title>}
      {description && (
        <Description>
          {expand ? description : `${description.substr(0, 50)}...`}
        </Description>
      )}
      {href && (
        <Link href={href} target="_blank">
          {href}
        </Link>
      )}
      {authors && (
        <>
          <Title>b1tf0unders</Title>
          <Authors expand={expand}>
            {authors.map(({ name, img }) => (
              <Author img={img} name={expand && name} />
            ))}
          </Authors>
        </>
      )}
    </Portfolio>
  );
};
