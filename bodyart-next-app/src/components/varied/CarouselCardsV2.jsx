import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Icon from "../common/Icon";
import styled from "styled-components";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function CarouselCardsV2() {
  const [perViews, setPerViews] = useState(4);
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
      <div className="navigation-wrapper relative bg-red-200 mx-4 mb-4">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div
            className="keen-slider__slide number-slide2"
            style={{ height: 100 }}
          >
            2
          </div>
          <div
            className="keen-slider__slide number-slide3"
            style={{ height: 150 }}
          >
            3
          </div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div
            className="keen-slider__slide number-slide5"
            style={{ height: 75 }}
          >
            5
          </div>
          <div
            className="keen-slider__slide number-slide6"
            style={{ height: 100 }}
          >
            6
          </div>
          <div
            className="keen-slider__slide number-slide7"
            style={{ height: 100 }}
          >
            7
          </div>
          <div
            className="keen-slider__slide number-slide8"
            style={{ height: 100 }}
          >
            8
          </div>
          <div
            className="keen-slider__slide number-slide9"
            style={{ height: 100 }}
          >
            9
          </div>
          <div
            className="keen-slider__slide number-slide10"
            style={{ height: 100 }}
          >
            10
          </div>
        </div>
        {loaded && instanceRef.current && (
          <StyledContainerIcon>
            <StyledIcon
              icon="FiChevronLeft"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              size="4rem"
              disabled={currentSlide === 0}
            />

            <StyledIcon
              icon="FiChevronRight"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              size="4rem"
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </StyledContainerIcon>
        )}
        <div className="w-full flex justify-center">
          {loaded && instanceRef.current && (
            <StyledContainerDots>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <StyledDot
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    active={currentSlide === idx}
                  ></StyledDot>
                );
              })}
            </StyledContainerDots>
          )}
        </div>
      </div>
    </>
  );
}

const StyledContainerIcon = styled.div`
  position: absolute;
  left: -5%;
  top: 0;
  width: 110%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

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
  top: 0;
  height: 110%;
  align-items: flex-end;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const StyledDot = styled.div`
  background-color: ${({ active }) => (active ? "red" : "green")};
  width: 10px;
  height: 10px;
`;
