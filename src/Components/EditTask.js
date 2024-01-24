import React, { useContext, useEffect } from "react";
import moment from "moment";
import dayjs from "dayjs";
import firebaseapp from "../firebase";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";
import { updateDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

function EditTask(){
    const db = getFirestore();

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

    useEffect(() => {
        const updateTask = async () => {
          if (selectedTask) {
            const taskDocRef = doc(db, 'tasks', selectedTask.id);
            try {
              await updateDoc(taskDocRef, {
                text,
                date: dayjs(date).format('DD/MM/YYYY'),
                hour: dayjs(hour).format('HH:mm'),
                projectName: taskProject,
              });
            } catch (error) {
              console.error('Error updating task:', error);
            }
          }
        };
    
        updateTask();
      }, [selectedTask, text, date, hour, taskProject]);
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