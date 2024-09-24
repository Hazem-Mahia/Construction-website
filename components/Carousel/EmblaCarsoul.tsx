"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

type Slider = {
  image: string;
  title: string;
  link: string;
};

interface CarouselProps {
  slides: string[] | Slider[];
  options?: EmblaOptionsType;
  isControllVisible?: boolean;
}

const EmblaCarousel: React.FC<CarouselProps> = ({
  slides,
  options,
  isControllVisible = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide overflow-hidden" key={`slide${index}`}>
              <div className="embla__slide__number">
                {typeof slide === "string" ? (
                  <Image
                    src={slide}
                    alt={`carousel slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Link href={slide.link}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    <h3 className="absolute left-8 bottom-4 inline-block text-white bg-gradient-to-r from-black to-transparent p-2">
                      {slide.title}
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isControllVisible && (
        <>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`embla__dot${
                    index === selectedIndex ? " embla__dot--selected" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default EmblaCarousel;
