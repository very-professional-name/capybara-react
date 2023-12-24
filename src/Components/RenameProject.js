import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
function RenameProject({project, setShowModal}){
    const [newProjectName, setNewProjectName] = useState(project.name)

    function handleSubmit(e) {

    }
    return(
        <div >
                <ProjectForm 
                    handleSubmit={handleSubmit}
                    header='Edit project time!'
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='Edit Project'
                    />


        </div>
    )
}
export default RenameProject