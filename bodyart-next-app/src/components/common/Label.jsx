import React from "react";
import styled from "styled-components";

export default function Label({
  text,
  fontSize,
  fontColor,
  fontWeight,
  className,
  line,
  lineSpace,
  lineSize,
  lineColor,
  lineRadius,
  onClick,
}) {
  return (
    <StyledLabel
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      className={className}
      line={line}
      lineSpace={lineSpace}
      lineSize={lineSize}
      lineColor={lineColor}
      lineRadius={lineRadius}
      onClick={onClick}
    >
      {text}
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  position: relative;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  color: ${({ theme, fontColor }) =>
    theme.colors[fontColor] ? theme.colors[fontColor] : fontColor};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};

  ::after {
    position: absolute;
    bottom: ${({ lineSpace }) => (lineSpace ? lineSpace : "0px")};
    content: "";
    display: ${({ line }) => (line ? "block" : "none")};
    width: 100%;
    height: ${({ lineSize }) => (lineSize ? lineSize : "3px")};
    background-color: ${({ theme, lineColor }) =>
      lineColor
        ? theme.colors[lineColor]
          ? theme.colors[lineColor]
          : lineColor
        : theme.colors["black_medium"]};
    border-radius: ${({ lineRadius }) => (lineRadius ? lineRadius : "2px")};
  }
`;
