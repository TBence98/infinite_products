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

    return (
        <div className={classes.slider}>
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
        </div>
    );
};

export default ImageSlider;
