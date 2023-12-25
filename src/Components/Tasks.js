import React, { useContext } from "react";
import Next7Days from "./Next7Days";
import Task from "./Task";
import { TaskContext } from "../context";
function Tasks(){

    const { selectedProject } = useContext(TaskContext)

    const tasks = [
        {
            id : 'd54sd4',
            text : "Go for a run",
            time : "10:00 AM",
            date : "06/03/2021",
            day : "6",
            checked : true,
            color : '#00ff00',
            project : 'personal'
        },
        {
            id : 'd54fdf',
            text : "Meeting",
            time : "09:00 AM",
            date : "08/03/2021",
            day : "1",
            checked : false,
            color : '#00ff00',
            project : 'work'
        }
    ]

    return (
        <div className='Tasks'>
            <div className='selected-project'>
                {selectedProject}
            </div>
            <div className="tasks">
            {
                selectedProject === "next 7 days" ?
                <Next7Days tasks={tasks} />
                :
                tasks.map( task => 
                    <Task task={task} key={task.id} />    
                )
            }
            </div>
        </div>
    )
}

export default Tasks