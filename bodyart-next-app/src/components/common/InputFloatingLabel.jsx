import React, { useRef } from "react";
import styled from "styled-components";

export default function InputFloatingLabel({
  id,
  name,
  autoComplete,
  autoFocus,
  type,
  placeholder,
  classNameContainer,
  className,
  onChange,
}) {
  const myRef = useRef();

  return (
    <div className={`form-floating mb-0${classNameContainer}`}>
      <StyledInput
        ref={myRef}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        name={name}
        type={type}
        className={`form-control ${className}`}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
      <StyledLabel for="floatingInput">{placeholder}</StyledLabel>
    </div>
  );
}

const StyledLabel = styled.label`
  margin-top: -6px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.light_blue};
`;

const StyledInput = styled.input`
  background-color: #00000000;
  padding-top: 1.25rem !important;
  height: 2.5rem !important;
  color: ${({ theme }) => theme.colors.light_blue};
  border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  :hover {
    background-color: #004c5824;
    color: ${({ theme }) => theme.colors.light_blue};
    border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
  }
  :focus {
    background-color: #004c5814;
    border: 2px solid ${({ theme }) => theme.colors.lapis_lazuli};
    color: ${({ theme }) => theme.colors.light_blue};
    box-shadow: none;
  }
  box-shadow: none;
`;
