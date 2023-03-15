import Article from "@/components/common/Article";
import Section from "@/components/common/Section";
import React, { useState } from "react";
import styled from "styled-components";
import CadastroCliente from "./cadastro";
import LoginCliente from "./login";

export default function AcessarCliente() {
  const [cadastroIsOpen, setCadastroIsOpen] = useState(false);

  return (
    <Section className="p-0 relative">
      <StyledImagePolygon />
      <StyledContainerPolygon className="px-40 py-10">
        <Article className="w-full h-full flex flex-col justify-center items-center">
          {cadastroIsOpen ? (
            <CadastroCliente
              onClickLabel={() => setCadastroIsOpen(false)}
              isOpen={cadastroIsOpen}
            />
          ) : (
            <LoginCliente
              onClickLabel={() => setCadastroIsOpen(true)}
              isOpen={!cadastroIsOpen}
            />
          )}
        </Article>
      </StyledContainerPolygon>
    </Section>
  );
}

const StyledImagePolygon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/images/varied/cadeiravermelha.jpg");
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 100%;
`;

const StyledContainerPolygon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 11.6% 68.4%);
  background-color: ${({ theme }) => theme.colors.black};
  width: 75%;
  height: 100%;
`;
