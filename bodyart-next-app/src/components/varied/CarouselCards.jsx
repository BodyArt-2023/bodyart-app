import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardCatalogo from "./CardCatalogo";

export default function CarouselCards() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 50,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <CardCatalogo
        className="keen-slider__slide number-slide1"
        title="Piercing House"
        avaliacao="5.0"
        image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
        description="O melhor em pierrcing e serviços estéticos da região!"
      />
      <CardCatalogo
        className="keen-slider__slide number-slide1"
        title="Piercing House"
        avaliacao="5.0"
        image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
        description="O melhor em pierrcing e serviços estéticos da região!"
      />
      <CardCatalogo
        className="keen-slider__slide number-slide1"
        title="Piercing House"
        avaliacao="5.0"
        image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
        description="O melhor em pierrcing e serviços estéticos da região!"
      />
      <CardCatalogo
        className="keen-slider__slide number-slide1"
        title="Piercing House"
        avaliacao="5.0"
        image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
        description="O melhor em pierrcing e serviços estéticos da região!"
      />
      <CardCatalogo
        className="keen-slider__slide number-slide1"
        title="Piercing House"
        avaliacao="5.0"
        image="https://palomakathllen.files.wordpress.com/2016/03/piercings-sobrancelhas.jpg"
        description="O melhor em pierrcing e serviços estéticos da região!"
      />
    </div>
  );
}
