import Article from "@/components/common/Article";
import Label from "@/components/common/Label";
import CarouselCards from "@/components/varied/CarouselCards";
import React from "react";
import styled from "styled-components";
import {
  CARDS_CABELEIREIROS,
  CARDS_PIERCING,
  CARDS_TATTOO,
} from "./fake_catalogo";

export default function Catalogo() {
  return (
    <Article className="overflow-x-hidden flex flex-col">
      <Label
        className="w-full text-center mb-2"
        text="Catálogo"
        fontColor="white_smoke"
        fontWeight="600"
        fontSize="1.25rem"
      />
      <CarouselCards
        titleCarousel="Piercings"
        cards={CARDS_PIERCING}
        perView="4"
        dotsView="6"
      />
      <CarouselCards
        titleCarousel="Cabeleireiros"
        cards={CARDS_CABELEIREIROS}
        perView="4"
        dotsView="6"
      />
      <CarouselCards
        titleCarousel="Tattoo's"
        cards={CARDS_TATTOO}
        perView="4"
        dotsView="6"
      />
    </Article>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  background-color: #571919d8;
  overflow-y: auto;
`;
