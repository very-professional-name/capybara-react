import React from "react";
import { useState } from "react";
import { useUser } from "../hooks";
import firebaseapp from "../firebase";
import { getFirestore, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';

import { Circle, CheckCircleFill, ArrowClockwise, Trash, Check } from "react-bootstrap-icons";

function Task({task}){
    const db = getFirestore();
    const [hover, setHover] = useState(false)
    const deleteTask = async (task) => {
        try {
            const db = getFirestore();
            const taskDocRef = doc(db, 'tasks', task.id);
            await deleteDoc(taskDocRef);
            console.log('Task deleted successfully');
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const setTaskStatusToChecked = async (task) => {
        try {
          const db = getFirestore();
          const taskDocRef = doc(db, 'tasks', task.id);
          const userDocRef = doc(db, 'users', "4tVjI4wy318qOOz16sJt");
      
          // Fetch the user's data
          const userDoc = await getDoc(userDocRef);
      
          if (!userDoc.exists()) {
            console.log('User not found');
            return;
          }
      
          const userData = userDoc.data();
      
          if (!userData) {
            console.log('UserData is undefined');
            return;
          }
      
          // Update the 'checked' field to true
          await updateDoc(taskDocRef, {
            checked: !task.checked,
          });
      
          // Update the user's 'money' field
          await updateDoc(userDocRef, {
            money: userData.money + 1,
          });
      
          console.log('Task status set to checked successfully');
        } catch (error) {
          console.error('Error setting task status to checked:', error);
        }
      };

    return (
        <div className='Task'>
            <div
                className="task-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-task">
                    {
                        task.checked ?
                        <span className="checked">
                            <CheckCircleFill color="#bebebe" />
                        </span>
                        :
                        <span className="unchecked">
                            <Circle color={task.color} />
                        </span>
                    }
                </div>
                <div className="text">
                    <p style={{color : task.checked ? '#bebebe' : '#000000'}}>{task.text}</p>
                    <span>{task.hour} - {task.date} - {task.projectName}</span>
                    

                    <div className={`line ${task.checked ? 'line-through' : ''}`}></div>
                </div>
                <div className="add-to-next-day">
                    {
                        task.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div>
                <div className="check-task"
                >
                    {
                        (hover || task.checked) &&
                        <span>
                            <Check size="40" onClick={() => setTaskStatusToChecked(task) }/>
                        </span>
                    }
                </div>

                <div className="delete-task"
                onClick={() => deleteTask(task) }>
                    {
                        (hover || task.checked) &&
                        <span>
                            <Trash />
                        </span>
                    }
                </div>

            </div>
        </div>
    )
}

export default Task