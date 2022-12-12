import { useState } from "react";

import classes from "./ImageSlider.module.css";

const ImageSlider: React.FC<{ slides: string[] }> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const moveDot = (index: number) => {
        setCurrentIndex(index);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={classes.slider}>
            <div
                className={`${classes.arrow} ${classes["arrow--left"]}`}
                onClick={goToPrevious}
            >
                &#60;
            </div>
            <div
                className={`${classes.arrow} ${classes["arrow--right"]}`}
                onClick={goToNext}
            >
                &#62;
            </div>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={`${classes.slide} ${
                            index === currentIndex ? classes.active : ""
                        }`}
                        key={index}
                    >
                        {index === currentIndex && (
                            <img
                                src={slide}
                                alt="product image"
                                className={classes.image}
                            />
                        )}
                    </div>
                );
            })}
            <div className={classes.dots_container}>
                {Array.from({ length: slides.length }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index)}
                        className={`${classes.dot} ${
                            currentIndex === index ? classes.dot_active : ""
                        }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default ImageSlider;

{
    /* <div className={classes.slider}>
    <div
        className={`${classes.arrow} ${classes["arrow--left"]}`}
        onClick={goToPrevious}
    >
        &#60;
    </div>
    <div
        style={{
            backgroundImage: `url(${slides[currentIndex]})`,
        }}
        className={classes.slide}
    ></div>
    <div
        className={`${classes.arrow} ${classes["arrow--right"]}`}
        onClick={goToNext}
    >
        &#62;
    </div>
</div>; */
}
