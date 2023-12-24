import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

import { Carousel } from "./components/carousel/carousel";

// Assuming CarouselProps and CarouselSlide are interfaces or types and not classes
// Adjust these imports based on your actual implementation
import type {
  CarouselProps,
  CarouselSlide,
} from "./components/carousel/carousel";

type ComponentHandler = (element: HTMLElement) => void;
type ComponentHandlerMap = { [key: string]: ComponentHandler | undefined };

function handleCarousel(element: HTMLElement): void {
  // Parse out the items off the HTMLElement for configuration of the react component
  const slidesData = element.dataset.slides?.split(",");

  if (!slidesData) {
    return;
  }

  const slides: CarouselSlide[] = slidesData.map((slideData) => {
    const [slideUrl, altText] = slideData.split(";");
    return { slideUrl, altText };
  });

  const carouselProps: CarouselProps = {
    placeholder: "demo placeholder text",
    slides: slides,
  };

  // Replace the HTMLElement with the Carousel
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <Carousel {...carouselProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const componentHandlers: ComponentHandlerMap = {
  carousel: handleCarousel,
  // Additional handlers can be added here
};

const componentElements = document.querySelectorAll("[data-jfcomponent]");

componentElements.forEach((element) => {
  const componentType = (element as HTMLElement).dataset.jfcomponent;
  if (componentType) {
    const handler = componentHandlers[componentType];
    if (handler) {
      handler(element as HTMLElement);
    } else {
      console.warn(`No handler for component type: ${componentType}`);
    }
  } else {
    console.warn("Component type is undefined");
  }
});
