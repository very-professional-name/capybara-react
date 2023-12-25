import React from "react";
import { useState } from "react";
import TaskForm from "./TaskForm";
function EditTask(){

    const [text, setText] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [taskProject, setTaskProject] = useState()

    const projects = [
        { id : 1, name : "personal", numOfTasks : 0 },
        { id : 2, name : "work", numOfTasks : 1 },
        { id : 3, name : "other", numOfTasks : 2 }
    ]

    function handleSubmit(e){

    }
    return (
        <div className='EditTask'>
            <div className="header">
                Edit Todo
            </div>
            <div className="container">
                <TaskForm
                    handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                    date={date}
                    setDate={setDate}
                    hour={hour}
                    setHour={setHour}
                    taskProject={taskProject}
                    setTaskProject={setTaskProject}
                    projects={projects}
                />
            </div>
        </div>
    )
}

export default EditTask