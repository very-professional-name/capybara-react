import React, { useState, useContext } from "react";
import ProjectForm from "./ProjectForm";
import { TaskContext } from "../context";
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
function RenameProject({project, setShowModal}){
    const [newProjectName, setNewProjectName] = useState(project.projectName)
    const { selectedProject, setSelectedProject } = useContext(TaskContext)
    const renameProject = async (project, newProjectName) => {
        try {
            const db = getFirestore();
            const projectsRef = collection(db, 'projects');
            const tasksRef = collection(db, 'tasks');
    
            const { name: oldProjectName } = project;
    
            // Check if a project with the new name already exists
            const duplicateProjectsQuery = query(projectsRef, where('name', '==', newProjectName));
            const duplicateProjectsSnapshot = await getDocs(duplicateProjectsQuery);
    
            if (!duplicateProjectsSnapshot.empty) {
                alert('Project with the same name already exists!');
            } else {
                // Update the project name
                const projectDocRef = doc(db, 'projects', project.id);
                await updateDoc(projectDocRef, {
                    name: newProjectName,
                });
    
                // Update todos with the new project name
                const tasksQuery = query(tasksRef, where('projectName', '==', oldProjectName));
                const tasksQuerySnapshot = await getDocs(tasksQuery);
    
                tasksQuerySnapshot.forEach((taskDoc) => {
                    const taskDocRef = doc(db, 'tasks', taskDoc.id);
                    updateDoc(taskDocRef, {
                        projectName: newProjectName,
                    });
                });
    
                // Update selectedProject if needed
                if (selectedProject === oldProjectName) {
                    setSelectedProject(newProjectName);
                }
    
                console.log('Project renamed successfully');
            }
        } catch (error) {
            console.error('Error renaming project:', error);
        }
    };
    
    
    
    
    function handleSubmit(e) {

        e.preventDefault()

        renameProject(project, newProjectName)

        setShowModal(false)

    }
    return(
        <div >
                <ProjectForm 
                    handleSubmit={handleSubmit}
                    header='Edit project name!'
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='Edit Project'
                    />


        </div>
    )
}
export default RenameProject