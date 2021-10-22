import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

//Hard coded inputs for testing
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  //Add item - updates "courseGoals"
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() }); //unshift() method adds the element to the beginning
      return updatedGoals;
    });
  };

  //Delete item - updates "courseGoals""
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  //If no goals are found, the following message is shown
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  //Goals gets added to the CourseGoalList.js
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> 
    );
  }

  //This where the user sees the form to be able to input, and button to "Add Goal"*/
  //"onAddGoal" are new inputs from CourseInputs.js
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
