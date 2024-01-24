import React, { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../context";

function Sidebar({ children }){
    const { selectedTask, setSelectedTask} = useContext(TaskContext)
    const sidebarRef  = useRef()
    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    const handleClick = e => {
        if(e.target === sidebarRef.current){
            setSelectedTask(undefined)
        }
    }
    return(
        <div className="Sidebar" ref={sidebarRef}>

                {children}
        </div>
    )
}
export default Sidebar