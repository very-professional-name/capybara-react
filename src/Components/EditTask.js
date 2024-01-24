import React, { useContext, useEffect } from "react";
import moment from "moment";
import dayjs from "dayjs";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";
function EditTask(){

    const [text, setText] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [taskProject, setTaskProject] = useState()

    const { selectedTask, projects } = useContext(TaskContext)

    useEffect(() => {
       if(selectedTask != undefined){
        setText(selectedTask.text)
        setHour(moment(selectedTask.hour, 'HH:mm A'))
        setDate(moment(selectedTask.date, 'DD/MM/YYYY'))
        setTaskProject(selectedTask.projectName)
       }
    }, [selectedTask])


    function handleSubmit(e){

    }
    return (
       <div>
        {
            selectedTask &&
            <div className='EditTask'>
            <div className="header">
                Edit Task
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
        }
       </div>
    )
}

export default EditTask