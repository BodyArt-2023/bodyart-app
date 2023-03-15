import React from "react";
import styled from "styled-components";

export default function UseMedia({ desktop, mobile }) {
  return (
    <>
      <StyledDesktop>{desktop}</StyledDesktop>
      <StyledMobile>{mobile}</StyledMobile>
    </>
  );
}

const StyledDesktop = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const StyledMobile = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
