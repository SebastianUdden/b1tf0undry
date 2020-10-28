import React from "react";
import styled from "styled-components";

const ExternalLinkIcon = styled.svg`
  margin-bottom: -1px;
`;

export default ({ size = "24px", color = "white" }) => {
  return (
    <ExternalLinkIcon
      width={size}
      height={size}
      viewBox="0 0 15 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>external-link</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="Designs---Quote/Design-Phone"
          transform="translate(-238.000000, -1638.000000)"
          stroke={color}
          stroke-width="1.5"
        >
          <g id="external-link" transform="translate(239.500000, 1639.000000)">
            <path
              d="M10,6.66666667 L10,10.6666667 C10,11.4030463 9.40304633,12 8.66666667,12 L1.33333333,12 C0.596953667,12 0,11.4030463 0,10.6666667 L0,3.33333333 C0,2.59695367 0.596953667,2 1.33333333,2 L5.33333333,2"
              id="Shape"
            ></path>
            <polyline
              id="Shape"
              points="8 4.4408921e-16 12 4.4408921e-16 12 4"
            ></polyline>
            <line
              x1="4.66666667"
              y1="7.33333333"
              x2="12"
              y2="3.0375702e-13"
              id="Shape"
            ></line>
          </g>
        </g>
      </g>
    </ExternalLinkIcon>
  );
};
