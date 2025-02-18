import styles from './Options.module.css';

export default function Options({ onFeedback, onReset, totalFeedback }) {
  return (
    <div className={styles['options']}>
      <button className={styles['optionBtn']} onClick={() => onFeedback('good')}>
        Good
      </button>
      <button className={styles['optionBtn']} onClick={() => onFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles['optionBtn']} onClick={() => onFeedback('bad')}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={styles['optionBtn']} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
