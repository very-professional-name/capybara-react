import React, { useContext, useState } from "react";
import { Pencil, XCircle } from "react-bootstrap-icons";
import Modal from "./Modal";
import RenameProject from "./RenameProject";
import { TaskContext } from "../context";
import { getFirestore, doc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
function Project({project, edit}){
    // CONTEXT
    const { defaultProject, selectedProject, setSelectedProject } = useContext(TaskContext)
    // STATE
    const [showModal, setShowModal] = useState(false)

    const deleteProject = async (project) => {
        try {
            const db = getFirestore();
    
            // Delete project document
            const projectDocRef = doc(db, 'projects', project.id);
            await deleteDoc(projectDocRef);
    
            // Delete todos associated with the project
            const taskCollectionRef = collection(db, 'tasks');
            const taskQuery = query(taskCollectionRef, where('projectName', '==', project.projectName));
            const tasksQuerySnapshot = await getDocs(taskQuery);
    
            tasksQuerySnapshot.forEach((taskDoc) => {
                const taskDocRef = doc(db, 'task', taskDoc.id);
                deleteDoc(taskDocRef);
            });
    
            // Update selectedProject if needed
            if (selectedProject === project.projectName) {
                setSelectedProject(defaultProject);
            }
    
            console.log('Project and associated todos deleted successfully');
        } catch (error) {
            console.error('Error deleting project and todos:', error);
        }
    };


    return (
        <div className='Project'>
            <div
                className="name"
                onClick={ () => setSelectedProject(project.projectName)}
            >
                {project.projectName}
            </div>
            <div className="btns">
                {
                    
                    <div className="edit-delete">
                        <span
                            className="edit"
                            onClick={ () => setShowModal(true)}
                        >
                            <Pencil size="13" />
                        </span>
                        <span className="delete" onClick={() => deleteProject(project)}>
                            <XCircle size="13" />
                        </span>
                    </div>
                    
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal}/>
            </Modal>
        </div>
    )
}

export default Project