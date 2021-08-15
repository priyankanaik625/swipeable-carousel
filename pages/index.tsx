import { NextPage } from "next";
import { Carousel, CarouselItem } from "../stories/Carousel/Carousel";

import image1 from "../public/assets/image1.jpg";
import image2 from "../public/assets/image2.jpg";
import image3 from "../public/assets/image3.jpg";

const carouselItem1 = {
  image: {
    src: image1.src,
    alt: "Carousel Item 1",
  },
  title: "Carousel Item 1",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
};

const carouselItem2 = {
  image: {
    src: image2.src,
    alt: "Carousel Item 2",
  },
  title: "Carousel Item 2",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
};

const carouselItem3 = {
  image: {
    src: image3.src,
    alt: "Carousel Item 3",
  },
  title: "Carousel Item 3",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
};

const Home: NextPage = () => {
  return (
    <>
      <h1>This is Nextjs page with carousel</h1>
      <Carousel>
        <CarouselItem {...carouselItem1}></CarouselItem>
        <CarouselItem {...carouselItem2}></CarouselItem>
        <CarouselItem {...carouselItem3}></CarouselItem>
      </Carousel>
    </>
  );
};

export default Home;
