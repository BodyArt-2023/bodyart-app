import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Icon from "../common/Icon";
import styled from "styled-components";
import CardCatalogo from "./CardCatalogo";
import Label from "../common/Label";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function CarouselCardsV2({
  cards,
  dotsView,
  perView,
  titleCarousel,
}) {
  const [perViews, setPerViews] = useState(perView);
  const [dotsViews, setDotsViews] = useState(dotsView);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: perViews,
        spacing: 20,
      },
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );

  return (
    <>
      <div className="relative">
        <Label
          className="ml-1 pb-3"
          text={titleCarousel}
          fontColor="white_smoke"
          fontWeight="500"
          fontSize="0.9rem"
        />
        {loaded && instanceRef.current && (
          <StyledIcon
            className="absolute -left-8 top-1/3"
            icon="FiChevronLeft"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            size="4rem"
            disabled={currentSlide === 0}
          />
        )}
        <div className="navigation-wrapper mx-4 mb-5">
          <div ref={sliderRef} className="keen-slider">
            {cards.map((card, index) => (
              <CardCatalogo
                key={card.title}
                className={`keen-slider__slide number-slide${index}`}
                title={card.title}
                avaliacao={card.avaliacao}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          {loaded && instanceRef.current && (
            <StyledContainerDots>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return idx <= dotsViews ? (
                  <StyledDot
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    active={currentSlide === idx}
                  ></StyledDot>
                ) : null;
              })}
            </StyledContainerDots>
          )}
        </div>
        {loaded && instanceRef.current && (
          <StyledIcon
            className="absolute -right-8 top-1/3"
            icon="FiChevronRight"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            size="4rem"
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        )}
      </div>
    </>
  );
}

const StyledIcon = styled(Icon)`
  transition: 0.2s;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: white;
  :hover {
    color: ${({ theme, disabled }) => (disabled ? null : theme.colors.lilac)};
  }
`;

const StyledContainerDots = styled.div.attrs({ className: "dots" })`
  position: absolute;
  bottom: 5%;
  align-items: flex-end;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const StyledDot = styled.div`
  transition: 0.2s;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.gray_dark : theme.colors.gray_light};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  :hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.gray_dark : theme.colors.gray};
  }
`;
