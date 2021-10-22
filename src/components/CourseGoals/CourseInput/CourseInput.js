import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

/*This where the user sees the form to be able to input, and button to "Add Goal"*/

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  //If user inputs and clicks "Add Goal" here it Updates "enteredValue"
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false); // Triggers color red css code
      return;
    }
    props.onAddGoal(enteredValue); // Sends to App.js if the "enteredValue" is not .length 0
  };

  //Form and button
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Add your Course Goal below:</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
