import React, { useId } from "react";
import Select from "react-select";
import styled from "styled-components";

export function Input({
  oneHolder,
  twoHolder,
  placeholder,
  onChange,
  type,
  value,
  defaultValue,
  className,
  classNameContainer,
  innerRef,
}) {
  return (
    <div className={`input-group ${classNameContainer}`}>
      {oneHolder ? <span className="input-group-text">{oneHolder}</span> : null}
      <StyledInput
        ref={innerRef}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
      {twoHolder ? <span className="input-group-text">{twoHolder}</span> : null}
    </div>
  );
}

const StyledInput = styled.input.attrs({ className: "form-control" })`
  transition: 0.2s;
  :enabled {
  }
  :disabled {
  }
  :hover {
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.african_violet};
    box-shadow: none;
  }
`;

export function InputSelectSearch({
  oneHolder,
  twoHolder,
  placeholder,
  classNameContainer,
  options,
}) {
  return (
    <div className={`input-group relative ${classNameContainer}`}>
      {oneHolder ? <span className="input-group-text">{oneHolder}</span> : null}

      <StyledSelect
        maxMenuHeight="250px"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "none",
            border: "none",
          }),
        }}
        className="form-control"
        options={options}
        placeholder={placeholder}
        onChange={(ev) => alert(ev.value)}
        instanceId={useId()}
      />

      {twoHolder ? <span className="input-group-text">{twoHolder}</span> : null}
    </div>
  );
}

const StyledSelect = styled(Select)`
  padding: 0;
  box-shadow: none;
  transition: 0.2s;
  text-transform: capitalize;
  :enabled {
  }
  :disabled {
  }
  :hover {
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.african_violet};
    box-shadow: none;
  }
`;
