import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";

/* Adds item into the list of goals */
/* Sends to the CourseGoalItem.js */

const CourseGoalList = (props) => {
  return (
    <ul className={`${styles["goal-list"]}`}>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem} // onDelete from CourseGoalItem, sends to App.js
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
