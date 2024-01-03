import React, { useEffect, useState } from "react";
import moment from 'moment'
import Task from "./Task";

function OldTasks({ tasks }) {
  
  return (
    <div>
        <p> Expired </p>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default OldTasks;