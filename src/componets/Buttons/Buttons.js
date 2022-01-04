import React from 'react';
import s from './Buttons.module.css';
import PropTypes from 'prop-types';

const Buttons = ({ names, onClick }) => {
  return Object.keys(names).map((name, index) => {
    return (
      <button
        key={index}
        type="button"
        className={s.button}
        onClick={() => {
          onClick(name);
        }}
      >
        {name}
      </button>
    );
  });
};

Buttons.propTypes = {
  names: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
