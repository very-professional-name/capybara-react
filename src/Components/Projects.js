import React from "react";
import Project from "./Project";
import AddNewProject from "./AddNewProject";
import RenameProjects from "./RenameProjects";
function Projects(){
    return(
        <div >
                <Project />
                <AddNewProject />
                <RenameProjects />
        </div>
    )
}
export default Projects