import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import Task from "./Task";
import { TaskContext } from "../context";
import { useFilteredTasks } from "../hooks"; // Import the custom hook

function Next30Days({ tasks }) {
  const { selectedProject } = useContext(TaskContext);
  const [fetchTrigger, setFetchTrigger] = useState(0); // State to trigger data fetching
  const filteredTasks = useFilteredTasks(tasks, selectedProject, fetchTrigger); // Use the custom hook with the fetch trigger

  useEffect(() => {
    // Fetch data when the component mounts or when selectedProject changes
    setFetchTrigger((prev) => prev + 1);
  }, [selectedProject]);

  return (
    <div>
      <p>Next 30 Days</p>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Next30Days;