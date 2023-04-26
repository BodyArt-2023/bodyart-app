import Article from "@/components/common/Article";
import Section from "@/components/common/Section";
import React from "react";
import Home from "./Home";

export default function ProfissionalUser() {
  return (
    <>
      <Section
        id="usuarioCliente"
        backgroundColor="black_secondary"
        backgroundImage="images/varied/homepro.png"
      >
        <Home />
      </Section>
      <Section id="usuarioCliente" backgroundColor="black_secondary">
        <Article>
          <div></div>
        </Article>
      </Section>
    </>
  );
}
