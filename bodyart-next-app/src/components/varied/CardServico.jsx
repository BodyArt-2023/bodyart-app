import React from "react";
import Label from "../common/Label";
import styled from "styled-components";
import Color from "color";

export default function CardServico({
  title,
  value,
  duration,
  description,
  children,
  servico,
  dataHora,
  finalizado,
  className,
  onClick,
}) {
  return (
    <StyledContainer className={className} onClick={onClick}>
      {children ? (
        children
      ) : (
        <>
          {title ? (
            <Label
              text={title}
              fontColor="light_blue"
              fontSize="0.9rem"
              className="w-full text-center cursor-pointer"
            />
          ) : null}
          {value ? (
            <LabelValue label={"Valor:"} value={`R$ ${value},00`} />
          ) : null}
          {duration ? <LabelValue label={"Duração:"} value={duration} /> : null}
          {description ? (
            <LabelValue label={"Descrição:"} value={description} />
          ) : null}
          {servico ? <LabelValue label={"Serviço:"} value={servico} /> : null}
          {dataHora ? (
            <LabelValue label={"Data/hora:"} value={dataHora} />
          ) : null}
          {finalizado ? (
            <LabelValue label={"Status:"} value={finalizado} />
          ) : null}
        </>
      )}
    </StyledContainer>
  );
}

function LabelValue({ label, value }) {
  return (
    <div className="flex flex-row gap-1">
      <Label
        text={label}
        fontColor="light_blue"
        fontSize="0.8rem"
        className="cursor-pointer"
      />
      <Label
        text={value}
        fontColor="african_violet"
        fontSize="0.8rem"
        className="truncate cursor-pointer"
      />
    </div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    Color(theme.colors.black_primary).lightness(11)};
  border: solid 1px ${({ theme }) => theme.colors.lapis_lazuli};
  border-radius: 5px;
  max-width: 250px;
  max-height: 100px;

  padding: 5px 20px;
  cursor: pointer;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.lapis_lazuli};
  :hover {
    background-color: ${({ theme }) =>
      Color(theme.colors.black_primary).lightness(8)};
    border: solid 1px ${({ theme }) => theme.colors.pearly_purple};
    color: ${({ theme }) => theme.colors.pearly_purple};
  }
`;
