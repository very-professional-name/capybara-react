import React, { createContext, useState } from "react";
import { useTasks, useProjects, useFilteredTasks } from "../hooks";
const TaskContext = createContext()

function TaskContextProvider({children}){
    const defaultProject =  'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)

    const tasks = useTasks()
    const projects = useProjects()
    const filteredTasks = useFilteredTasks(tasks, selectedProject)
    return (
        <TaskContext.Provider
        
        value={
            {
                selectedProject,
                setSelectedProject,
                tasks: filteredTasks,
                projects
            }

        }
        >
            {children}
        </TaskContext.Provider>
    )

}

export { TaskContextProvider, TaskContext}