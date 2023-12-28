import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";
import firebaseapp from "../firebase";
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
function AddNewProject(){
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')
    const db = getFirestore(firebaseapp);

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (projectName) {
            const db = getFirestore();
            const projectsRef = collection(db, 'projects');
    
            const q = query(projectsRef, where('projectName', '==', projectName));
    
            try {
                const querySnapshot = await getDocs(q);
    
                if (querySnapshot.empty) {
                    await addDoc(projectsRef, { projectName: projectName });
                } else {
                    alert('Project already exists!');
                }
    
                setShowModal(false);
                setProjectName('');
            } catch (error) {
                console.error('Error checking for existing project:', error);
            }
        }
    }

    return (
        <div className='AddNewProject'>
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <Plus size="20" />
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading='New project!'
                    value={projectName}
                    setValue={setProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='+ Add Project'
                />
            </Modal>
        </div>
    )
}

export default AddNewProject