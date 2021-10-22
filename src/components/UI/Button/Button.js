import React from 'react';
import styles from './Button.module.css';

/*Button to "Add Goal" - onClick to CourseInput.js*/
/* props.children is the botton from CourseInput.js */

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children} 
    </button>
  );
};

export default Button;
