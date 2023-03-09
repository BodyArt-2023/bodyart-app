import Article from "@/components/common/Article";
import CardCatalogo from "@/components/varied/CardCatalogo";
import CarouselCards from "@/components/varied/CarouselCards";
import CarouselCardsV2 from "@/components/varied/CarouselCardsV2";
import React from "react";
import styled from "styled-components";

export default function Feed() {
  return (
    <Article className="overflow-x-hidden flex flex-col">
      <CarouselCardsV2></CarouselCardsV2>
      <CarouselCards></CarouselCards>
      {/* <StyledContent>
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
      </StyledContent>

      <StyledContent>
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
        <CardCatalogo
          title="Piercing House"
          avaliacao="5.0"
          image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
          description="O melhor em pierrcing e serviços estéticos da região!"
        />
      </StyledContent> */}
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
