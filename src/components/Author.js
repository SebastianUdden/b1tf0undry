import React from "react";
import styled from "styled-components";

const Author = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const Name = styled.label``;

export default ({ img, name }) => {
  return (
    <Author>
      {img && <Img src={img} />}
      {name && <Name>{name}</Name>}
    </Author>
  );
};
