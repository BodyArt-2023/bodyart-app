import React from "react";
import styled from "styled-components";

export default function Article({ children, className }) {
  return (
    <StyledArticle className={`container ${className}`}>
      {children}
    </StyledArticle>
  );
}

const StyledArticle = styled.article``;
