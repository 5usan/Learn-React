import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  const deleteHandler = (goalId) => {
    props.onDeleteItem(goalId);
  };

  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={deleteHandler}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
