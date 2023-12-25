import React, { useState } from "react";
import Project from "./Project";
import AddNewProject from "./AddNewProject";
import RenameProject from "./RenameProject";
import { CaretUp, PencilFill } from "react-bootstrap-icons";
function Projects() {
    const [showMenu, setShowMenu] = useState(true)
    const [edit, setEdit] = useState(false)
    const pencilColor = edit ? "#228B22" : "#000000"
    const projects = [
        { id : 1, name : "personal", numOfTasks : 0 },
        { id : 2, name : "work", numOfTasks : 1 },
        { id : 3, name : "other", numOfTasks : 2 }
    ]
    return (
        <div className="Projects">
            <div className="header">
                <div className="title">
                <p> Projects </p>
                </div>
                <div className="btns">
                    {
                        showMenu && projects.length > 0 &&
                        <span className="edit" onClick={() => setEdit(edit => !edit)}>
                            <PencilFill size="20" color={pencilColor}/>
                        </span>
                    }
                <AddNewProject />
                <span className="arrow">
                     <CaretUp size="20"/>
                </span>
                </div>
            </div>
            <div className="items">
                {
                    projects.map(project =>
                        <Project project={project} key={project.id} edit={edit}/>
                        
                        )
                }

            </div>
        </div>
    )
}
export default Projects