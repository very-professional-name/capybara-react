import React, { useEffect, useState } from "react";
import moment from 'moment'
import Task from "./Task";

function OldTasks({ tasks }) {
  
  return (
    <div>
        <p> Expired </p>
      {tasks.map((task) => (
        <div>
          <Task key={task.id} task={task} />
          
          </div>
        
        
      ))}
      
    </div>
  );
}

export default OldTasks;