import { Button } from "@/components/common/Buttons";
import Label from "@/components/common/Label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";

export default function FormSign({
  onClickLabel,
  labelUpLeft,
  labelUpRight,
  labelDownLeft,
  labelDownRight,
  isOpen,
  onSubmitForm,
  inputs,
  buttonsGenero,
}) {
  const [genero, setGenero] = useState(null);
  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmit = onSubmitForm;

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} isOpen={isOpen}>
      <div className="flex flex-row justify-between items-center w-96">
        <Label
          text={labelUpLeft}
          fontColor="lapis_lazuli"
          fontSize="1.5rem"
          fontWeight="600"
        />

        <StyledLabel
          text={labelUpRight}
          fontSize="0.8rem"
          fontWeight="400"
          onClick={onClickLabel}
        />
      </div>
      {inputs
        ? inputs.map((input) => (
            <StyledInput
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              autoComplete={input.autoComplete}
              autoFocus={input.autoFocus}
              innerRef={input.ref}
              {...register(input.name)}
            />
          ))
        : null}
      {buttonsGenero ? (
        <div className="btn-group" role="group">
          {buttonsGenero.map((button) => (
            <StyledButtonGenero
              key={button.label}
              themeButton="transparentLapisLazuli"
              type="button"
              className="btn btn-outline-primary btn-sm"
              disabled={genero === button.value}
              onClick={() => {
                setGenero(button.value);
                setValue(`${button.name}`, `${button.value}`);
              }}
            >
              {button.label}
            </StyledButtonGenero>
          ))}
        </div>
      ) : null}
      <div className="flex flex-row justify-between items-center">
        <StyledLabel text={labelDownLeft} fontSize="0.8rem" fontWeight="400" />
        <Button className="btn-sm" type="submit">
          {labelDownRight}
        </Button>
      </div>
    </StyledForm>
  );
}

const animOpen = keyframes`
0%{visibility: hidden; opacity: 0;}
100%{visibility: visible; opacity: 1;}
`;

const animClose = keyframes`
0%{visibility: visible; opacity: 1;}
100%{visibility: hidden; opacity: 0;}
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  animation: ${({ isOpen }) => (isOpen ? animOpen : animClose)} ease-in-out
    forwards 0.4s;
`;

const StyledLabel = styled(Label)`
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.light_blue};
  :hover {
    color: ${({ theme }) => theme.colors.lilac};
  }
  cursor: pointer;
`;

const StyledButtonGenero = styled(Button)`
  :enabled {
    border-color: ${({ theme }) => theme.colors.lapis_lazuli} !important;
    color: ${({ theme }) => theme.colors.light_blue};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.lilac};
  }

  :active {
    background-color: #00000000 !important;
  }
`;

const StyledInput = styled.input.attrs({ className: "form-control" })`
  font-size: 0.75rem;
  transition: 0.2s;
  background-color: #00000000;
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
  ::placeholder {
    color: ${({ theme }) => theme.colors.light_blue};
  }
  box-shadow: none;
`;
