import React from "react";
import styled from "styled-components";

export const Button = styled.button.attrs({ className: "btn" })`
  font-weight: 400;

  :enabled {
    background-color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].enabled.background};
    color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].enabled.color};
    border: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].enabled.border
        ? theme.buttons[themeButton ? themeButton : "default"].enabled.border
        : null} !important;
  }
  :disabled {
    background-color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].disabled.background};
    color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].disabled.color};
    box-shadow: none;
    border: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].disabled.border
        ? theme.buttons[themeButton ? themeButton : "default"].disabled.border
        : null} !important;
  }
  :hover {
    background-color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].hover.background};
    color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].hover.color};
    border: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].hover.border
        ? theme.buttons[themeButton ? themeButton : "default"].hover.border
        : null} !important;
  }
  :active {
    background-color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].active
        .background} !important;
    color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].active
        .color} !important;
    border-color: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].active
        .background} !important;
    border: ${({ theme, themeButton }) =>
      theme.buttons[themeButton ? themeButton : "default"].active.border
        ? theme.buttons[themeButton ? themeButton : "default"].active.border
        : null} !important;
  }
`;
