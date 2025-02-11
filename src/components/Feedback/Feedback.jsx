import styles from './Feedback.module.css';

export default function Feedback({ feedback }) {
  const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={styles['feedbackList']}>
      <p className={styles['feedbackItem']}>Good: {feedback.good}</p>
      <p className={styles['feedbackItem']}>Neutral: {feedback.neutral}</p>
      <p className={styles['feedbackItem']}>Bad: {feedback.bad}</p>
      <p className={styles['feedbackItem']}>Total: {total}</p>
      <p className={styles['feedbackItem']}>Positive: {((feedback.good / total) * 100).toFixed(2)}%</p>
    </div>
  );
}


