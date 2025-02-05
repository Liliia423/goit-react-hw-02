import styles from './Options.module.css';

export default function Options() {
    return (
        <div className={styles['options']}>
            <p className={styles['optionBtn']}>Good</p>
            <p className={styles['optionBtn']}>Neutral</p>
            <p className={styles['optionBtn']}>Bad</p>
            <p className={styles['optionBtn']}>Reset</p>
        </div>    
    )
}