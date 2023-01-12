import classes from "./RatingStars.module.css";

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];
    const calculatedStars = Math.floor(rating);

    return (
        <ul>
            {stars.map((star) => {
                return (
                    <li
                        key={star}
                        className={`${classes.star} ${
                            star <= calculatedStars ? classes.filled_star : null
                        }`}
                    >
                        &#9733;
                    </li>
                );
            })}
        </ul>
    );
};

export default RatingStars;
