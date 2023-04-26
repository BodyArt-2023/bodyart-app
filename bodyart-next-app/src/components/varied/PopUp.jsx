import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../common/Icon";

export default function PopUp({
  isOpen,
  onClose,
  children,
  backgroundColor,
  width,
  height,
  trigger,
  backgroundWidth,
  backgroundHeight,
  className,
}) {
  return (
    <>
      {isOpen ? (
        <Background
          backgroundWidth={backgroundWidth}
          backgroundHeight={backgroundHeight}
        >
          <Content
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            className={`relative ${className}`}
          >
            {children}
            <IconClose icon="FiX" size="2rem" onClick={onClose} />
          </Content>
        </Background>
      ) : null}
      {trigger ? <div>{trigger}</div> : null}
    </>
  );
}

const IconClose = styled(Icon)`
  position: absolute;
  transition: 0.2s;
  right: -9%;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black_primary};
  color: ${({ theme }) => theme.colors.light_blue};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
    background-color: ${({ theme }) => theme.colors.lapis_lazuli};
    color: ${({ theme }) => theme.colors.light_blue};
  }
`;

const Content = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : backgroundColor};
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "400px")};
  height: ${({ height }) => (height ? height : null)};
  padding: 5px 10px;
`;

const Background = styled.div`
  width: ${({ backgroundWidth }) =>
    backgroundWidth ? backgroundWidth : "100vw"};
  height: ${({ backgroundHeight }) =>
    backgroundHeight ? backgroundHeight : "100vh"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999999999999;
  background-color: rgba(0, 0, 0, 0.665);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
