import React from "react";
import { useState } from "react";
import { Circle, CheckCircleFill, ArrowClockwise, Trash } from "react-bootstrap-icons";

function Task({task}){
    const [hover, setHover] = useState(false)
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
                    <span>{task.time} - {task.project}</span>
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
                <div className="delete-task">
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