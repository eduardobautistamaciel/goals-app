import React from "react";
import styles from "./CourseGoalItem.module.css";

/* Item of each goal */
/* props.children from CourseGoalList.js */

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id); // Sent to CourseGoalList.js
  };

  return (
    <li className={`${styles["goal-item"]}`} onClick={deleteHandler}>
      {props.children} 
    </li>
  );
};

export default CourseGoalItem;
