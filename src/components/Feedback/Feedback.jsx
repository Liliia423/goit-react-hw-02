import styles from './Feedback.module.css';

export default function Feedback({ feedback, positivePercentage }) {
  const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={styles['feedbackList']}>
      <p className={styles['feedbackItem']}>Good: {feedback.good}</p>
      <p className={styles['feedbackItem']}>Neutral: {feedback.neutral}</p>
      <p className={styles['feedbackItem']}>Bad: {feedback.bad}</p>
      <p className={styles['feedbackItem']}>Total: {total}</p>
      <p className={styles['feedbackItem']}>Positive: {positivePercentage}%</p>
    </div>
  );
}
