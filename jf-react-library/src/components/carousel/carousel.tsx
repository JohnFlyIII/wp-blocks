import { Carousel as MTCarousel } from "@material-tailwind/react";

export type CarouselSlide = {
  slideUrl: string;
  altText: string;
};

export type CarouselProps = {
  placeholder: string;
  slides: CarouselSlide[];
};

export function Carousel({ placeholder, slides }: CarouselProps) {
  return (
    <MTCarousel
      placeholder={placeholder}
      transition={{ duration: 2 }}
      className="rounded-xl"
    >
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.slideUrl}
          alt={slide.altText}
          className="h-full w-full object-cover"
        />
      ))}
    </MTCarousel>
  );
}
