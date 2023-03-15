import Article from "@/components/common/Article";
import Icon from "@/components/common/Icon";
import { InputSelectSearch } from "@/components/common/Inputs";
import Label from "@/components/common/Label";
import Color from "color";
import React, { useState } from "react";
import styled from "styled-components";

const optionsSelectServicos = [
  { label: "optionsSelectServicos", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
];

const optionsSelectEstabelecimentos = [
  { label: "optionsSelectEstabelecimentos", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
];

const optionsSelectProfissionais = [
  { label: "optionsSelectProfissionais", value: "value1" },
  {
    label: <Icon icon="BsScissors" size="5rem" color="lapis_lazuli" />,
    value: "value2",
  },
  { label: "label3", value: "value3" },
];

const inputs = {
  inputServicos: {
    icon: "BsScissors",
    placeholder: "Pesquise por serviços do seu interesse",
    options: optionsSelectServicos,
  },
  inputEstabelecimento: {
    icon: "SiHomeassistantcommunitystore",
    placeholder: "Pesquise por estabelecimentos do seu interesse",
    options: optionsSelectEstabelecimentos,
  },
  inputProfissionais: {
    icon: "FaUsers",
    placeholder: "Pesquise por profissionais do seu interesse",
    options: optionsSelectProfissionais,
  },
};

export default function Home() {
  const [inputSelected, setInputSelected] = useState(inputs.inputServicos);

  return (
    <StyledArticleContainer className="h-full">
      <div className="flex flex-col gap-3">
        <StyledTitle>
          <Label
            text="Bem-vindo ao"
            fontWeight="500"
            fontColor="white"
            fontSize="1.25rem"
          />
          <Label
            text="BodyArt"
            fontWeight="600"
            fontColor="white"
            fontSize="2.25rem"
            line
            lineColor="lilac"
            lineSpace="-5px"
            className="-mt-2"
          />
        </StyledTitle>
        <StyledSubTitle>
          <Label text="Onde você estiver..." fontColor="white" />
          <Label text="Estética e beleza para você!" fontColor="white" />
        </StyledSubTitle>
      </div>
      <StyledContainerInput>
        <InputSelectSearch
          classNameContainer="h-10"
          oneHolder={<Icon icon="FiSearch" color="black_medium" />}
          twoHolder={
            <Icon
              icon={inputSelected.icon}
              size="1.20rem"
              color="lapis_lazuli"
            />
          }
          placeholder={inputSelected.placeholder}
          options={inputSelected.options}
        />
        <StyledIcon
          icon="BsScissors"
          size="2.50rem"
          inputSelected={inputSelected.icon}
          onClick={() => setInputSelected(inputs.inputServicos)}
        />
        <StyledIcon
          icon="SiHomeassistantcommunitystore"
          size="2.50rem"
          inputSelected={inputSelected.icon}
          onClick={() => setInputSelected(inputs.inputEstabelecimento)}
        />
        <StyledIcon
          icon="FaUsers"
          size="2.50rem"
          inputSelected={inputSelected.icon}
          onClick={() => setInputSelected(inputs.inputProfissionais)}
        />
      </StyledContainerInput>
    </StyledArticleContainer>
  );
}

const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const StyledIcon = styled(Icon)`
  visibility: ${({ inputSelected, icon }) =>
    inputSelected !== icon ? "visible" : "hidden"};
  display: ${({ inputSelected, icon }) =>
    inputSelected !== icon ? "block" : "none"};
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.white_smoke};
  color: ${({ theme }) => theme.colors.lapis_lazuli};
  border-radius: 5px;
  transition: 0.2s;
  :hover {
    background-color: ${({ theme }) =>
      Color(theme.colors.white_smoke).darken(0.05)};
    color: ${({ theme }) => Color(theme.colors.lapis_lazuli).darken(0.2)};
  }
  :active {
    background-color: ${({ theme }) =>
      Color(theme.colors.white_smoke).lighten(0.2)};
    color: ${({ theme }) => Color(theme.colors.lilac).darken(0.3)};
  }
`;

const StyledArticleContainer = styled(Article)`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 5rem 0;
  gap: 1.25rem;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const StyledSubTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
