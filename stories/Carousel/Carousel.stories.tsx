import { Meta, Story } from "@storybook/react";
import { Carousel, CarouselItem } from "./Carousel";

import image1 from "../../public/assets/image1.jpg";
import image2 from "../../public/assets/image2.jpg";
import image3 from "../../public/assets/image3.jpg";

const carouselItem1 = {
  image: {
    src: image1 as any,
    alt: "Carousel Item 1",
  },
  title: "Carousel Item 1",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
};

const carouselItem2 = {
  image: {
    src: image2 as any,
    alt: "Carousel Item 2",
  },
  title: "Carousel Item 2",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
};

const carouselItem3 = {
  image: {
    src: image3 as any,
    alt: "Carousel Item 3",
  },
  title: "Carousel Item 3",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
};

export default {
  title: "Layout/Carousel",
  component: Carousel,
} as Meta;

const Template: Story = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <CarouselItem {...carouselItem1} />,
    <CarouselItem {...carouselItem2} />,
    <CarouselItem {...carouselItem3} />,
  ],
};
