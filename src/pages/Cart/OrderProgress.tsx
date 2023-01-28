import classes from "./OrderProgress.module.css";

const OrderProgress = ({
    phase,
    goToPhase,
}: {
    phase: number;
    goToPhase: (phase: number) => void;
}) => {
    const phaseLinks = [
        "1. Shopping Cart",
        "2. Delivery Address",
        "3. Shipping and Payment",
        "4. Summary",
    ];

    return (
        <>
            <div className={classes.links_container}>
                {phaseLinks.map((phaseLink, index) => {
                    if (index + 1 < phase) {
                        // can link back
                        return (
                            <button
                                type="button"
                                onClick={() => goToPhase(index + 1)}
                                className={classes.phase_btn}
                                key={index}
                            >
                                {phaseLink}
                            </button>
                        );
                    }
                    if (index + 1 === phase) {
                        // active link
                        return (
                            <span className={classes.active_phase} key={index}>
                                {phaseLink}
                            </span>
                        );
                    } else {
                        // regular span element
                        return <span key={index}>{phaseLink}</span>;
                    }
                })}
            </div>
            <div className={classes.progress_bar_container}>
                <div data-phase={phase} className={classes.progress_bar}></div>
            </div>
        </>
    );
};

export default OrderProgress;
