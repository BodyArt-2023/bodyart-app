import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function Section({
  id,
  children,
  className,
  background,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  boxShadow,
  heightAuto,
}) {
  return (
    <>
      <StyledSection
        id={id}
        backgroundColor={backgroundColor}
        className={className}
        backgroundImage={backgroundImage}
        backgroundPosition={backgroundPosition}
        boxShadow={boxShadow}
        background={background}
        heightAuto={heightAuto}
      >
        {children}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  background: ${({ background }) => (background ? background : null)};

  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : backgroundColor};
  padding: 2rem;
  width: 100%;
  height: ${({ heightAuto }) => (heightAuto ? "auto" : "calc(100vh - 5rem)")};

  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : null};

  background-size: cover;

  background-position: ${({ backgroundPosition }) =>
    backgroundPosition ? backgroundPosition : "center"};

  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : null)};
`;
