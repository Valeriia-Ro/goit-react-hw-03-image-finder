import React from 'react';
import s from '../Button/Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
