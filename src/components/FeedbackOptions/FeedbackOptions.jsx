import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.btn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
