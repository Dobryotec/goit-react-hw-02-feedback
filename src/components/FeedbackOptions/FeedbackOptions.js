import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedback }) => {
  return (
    <div className={css.btns}>
      <button
        className={css.btn}
        type="button"
        onClick={() => feedback('good')}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => feedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.btn} type="button" onClick={() => feedback('bad')}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
