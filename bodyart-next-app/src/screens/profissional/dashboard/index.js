import Article from "@/components/common/Article";
import { Button } from "@/components/common/Buttons";
import Section from "@/components/common/Section";
import Galeria from "@/screens/cliente/usuario/galeria";
import React, { useState } from "react";
import styled from "styled-components";
import Portifolio from "./portifolio";
import MeusServicos from "./meusServicos";
import Agendamentos from "./agendamentos";

const BUTTONS = [
  {
    label: "Agendamentos",
  },
  {
    label: "Portifólio",
  },
  {
    label: "Publicações",
  },
  {
    label: "Estabelecimento",
  },
  {
    label: "Meus serviços",
  },
];

export default function DashboardProfissional() {
  const [page, setPage] = useState("Agendamentos");

  return (
    <Section id="usuarioCliente" backgroundColor="black_secondary">
      <Article className="w-full h-full flex flex-col gap-2">
        <div className="w-full flex flex-row justify-center gap-2 border-solid border-2 border-[#23699D] rounded py-2">
          {BUTTONS.map((button) => {
            return (
              <StyledButton
                key={button.label}
                disabled={page === button.label}
                onClick={() => setPage(button.label)}
              >
                {button.label}
              </StyledButton>
            );
          })}
        </div>
        <div className="w-full h-full flex flex-row justify-center gap-2 border-solid border-2 border-[#23699D30] rounded overflow-auto">
          {page === "Agendamentos" ? <Agendamentos /> : null}
          {page === "Portifólio" ? <Portifolio /> : null}
          {page === "Meus serviços" ? <MeusServicos /> : null}
        </div>
        {/* <Galeria onlyAddTrigger={<Button>Olá mundo</Button>} /> */}
      </Article>
    </Section>
  );
}

const StyledButton = styled(Button).attrs({
  className: "btn-sm w-[150px]",
  themeButton: "transparentLapisLazuliTwo",
  disabledOpacity: "1",
})``;
