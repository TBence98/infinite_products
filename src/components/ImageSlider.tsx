import React, { useEffect } from "react";
import classes from "./ImageSlider.module.css";

interface SliderProps {
    slides: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [prevBtnIsDisabled, setPrevBtnIsDisabled] = React.useState(true);
    const [nextBtnIsDisabled, setNextBtnIsDisabled] = React.useState(true);

    useEffect(() => {
        /* in this case both button have to use the initial true value
        for the disable attribute */
        if (slides.length === 1) return;

        if (offset === 0) {
            setPrevBtnIsDisabled(true);
        } else {
            setPrevBtnIsDisabled(false);
        }
        if (offset === slides.length - 1) {
            setNextBtnIsDisabled(true);
        } else {
            setNextBtnIsDisabled(false);
        }
    }, [offset]);

    const handlePrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(slides.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
        setOffset((prevOffset) => prevOffset - 1);
    };

    const handleNext = () => {
        if (currentIndex === slides.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        setOffset((prevOffset) => prevOffset + 1);
    };

    const moveDot = (index: number) => {
        setCurrentIndex(index);
        setOffset(index);
    };

    return (
        <div className={classes.slider_controls_container}>
            <div className={classes.slider}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        style={{
                            transform: `translateX(${100 * (index - offset)}%)`,
                            transition: "all 0.5s",
                        }}
                        alt="product image"
                    />
                ))}
            </div>
            <button
                className={`${classes.arrow} ${classes["arrow--left"]}`}
                onClick={handlePrevious}
                disabled={prevBtnIsDisabled}
            >
                &#60;
            </button>
            <button
                className={`${classes.arrow} ${classes["arrow--right"]}`}
                onClick={handleNext}
                disabled={nextBtnIsDisabled}
            >
                &#62;
            </button>
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
        </div>
    );
};

export default ImageSlider;
