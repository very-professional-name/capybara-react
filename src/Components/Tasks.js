import React, { useContext } from "react";
import Next7Days from "./Next7Days";
import Next30Days from "./Next30Days";
import Task from "./Task";
import { TaskContext } from "../context";
import OldTasks from "./OldTasks";

function Tasks() {
  const { selectedProject, tasks } = useContext(TaskContext);

  const hardcodedTasks = [
    { id: 1, date: '25/12/2022', description: 'Sample Task' },
    { id: 2, date: '26/12/2022', description: 'Sample  2 ' }]

  return (
    <div className="Tasks">
      <div className="selected-project">{selectedProject}</div>
      <div className="tasks">
        {selectedProject === "next 30 days" ? (
          <Next30Days tasks={tasks} />
        )  
        
        : selectedProject === "old tasks" ? (
            <OldTasks tasks={tasks} />
          )
        
        
        : selectedProject === "next 7 days" ? (
          <Next7Days tasks={tasks} />
        ) : (
          tasks.map((task) => <Task task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
}

export default Tasks;