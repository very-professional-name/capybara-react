// TaskContextProvider.js
import React, { createContext, useState, useEffect } from "react";
import { useTasks, useProjects, useFilteredTasks } from "../hooks";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const defaultProject = 'today';
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  const tasks = useTasks();
  const projects = useProjects();
  const filteredTasks = useFilteredTasks(tasks, selectedProject);

  useEffect(() => {
    // Additional logic to handle task fetching or data update
    // Example: Fetch tasks from an API or database
    // updateTasks(fetchTasks()); // Assuming fetchTasks is an async function
  }, []); // Add dependencies as needed

  return (
    <TaskContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        tasks: filteredTasks,
        projects,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };