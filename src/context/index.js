// TaskContextProvider.js
import React, { createContext, useState, useEffect } from "react";
import { useTasks, useProjects, useFilteredTasks, useCapybara } from "../hooks";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const defaultProject = 'today';
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const capybara = useCapybara();
  const tasks = useTasks();
  const projects = useProjects();
  const filteredTasks = useFilteredTasks(tasks, selectedProject);

  useEffect(() => {
  }, []); 

  return (
    <TaskContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        tasks: filteredTasks,
        projects,
        capybara
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };