import React, { Children, useState } from "react";
import styles from "./Carousel.module.scss";
import { useSwipeable } from "react-swipeable";

export type CarouselItemProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <div className={styles["carousel-item"]}>
      <img
        className={styles["carousel-item__image"]}
        src={image.src}
        alt={image.alt}
      />
      <div className={styles["carousel-item__info"]}>
        <h2 className={styles["carousel__title"]}>{title}</h2>
        <p className={styles["carousel__text"]}>{text}</p>
      </div>
    </div>
  );
};

// export type CarouselProps = {
//   item: typeof CarouselItem[];
// };

export const Carousel: React.FC = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const NumberofItems = React.Children.count(children);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= NumberofItems) {
      newIndex = NumberofItems - 1;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className={styles.carousel} {...handlers}>
      <div
        className={styles["carousel__inner"]}
        style={{
          transform: `translateX(calc(-${
            activeIndex * 100
          }% - ${activeIndex} * ${styles.marginLeft}))`,
        }}
      >
        {React.Children.map(children, (child, index) => child)}
      </div>
      <div className={styles["carousel__nav"]}>
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>

        {React.Children.map(children, (child, index) => (
          <button
            className={styles["carousel__indicators"]}
            onClick={() => updateIndex(index)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
};
function useSwipable(arg0: {}) {
  throw new Error("Function not implemented.");
}
