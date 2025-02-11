import styles from './Options.module.css';

export default function Options({ setFeedback, totalFeedback }) {
    const handleClick = (type) => {
        setFeedback((prev) => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    const handleReset = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    return (
        <div className={styles['options']}>
            <button className={styles['optionBtn']} onClick={() => handleClick('good')}>Good</button>
            <button className={styles['optionBtn']} onClick={() => handleClick('neutral')}>Neutral</button>
            <button className={styles['optionBtn']} onClick={() => handleClick('bad')}>Bad</button>

            {/* Кнопка "Reset" рендериться тільки якщо є хоча б один відгук */}
            {totalFeedback > 0 && (
                <button className={styles['optionBtn']} onClick={handleReset}>Reset</button>
            )}
        </div>
    );
}
