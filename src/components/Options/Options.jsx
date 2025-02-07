import styles from './Options.module.css';


export default function Options({ setFeedback }) {
    const handleClick = (type) => {
        setFeedback((prev) => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    return (
        <div className={styles['options']}>
            <button className={styles['optionBtn']} onClick={() => handleClick('good')}>Good</button>
            <button className={styles['optionBtn']} onClick={() => handleClick('neutral')}>Neutral</button>
            <button className={styles['optionBtn']} onClick={() => handleClick('bad')}>Bad</button>
            <button className={styles['optionBtn']} onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>Reset</button>
        </div>
    );
}