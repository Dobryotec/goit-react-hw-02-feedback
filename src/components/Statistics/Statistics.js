import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentge }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentge()} </li>
      </ul>
    </div>
  );
};

export default Statistics;
