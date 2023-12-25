import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import firebaseapp from "../firebase";
import 'firebase/compat/firestore';

import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseapp);

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    async function getTasks(db) {
        const tasksCol = collection(db, 'tasks');
        const taskSnapshot = await getDocs(tasksCol);
        const taskList = taskSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
           
        }));

        setTasks(taskList);

    }

    useEffect(() => {
        getTasks(db);
    }, [db]);
    return tasks;
}

export function useProjects() {
    const [projects, setProjects] = useState([]);

  


    async function getProjects(db) {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectList = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
           
        }));

        setProjects(projectList);
    }

    useEffect(() => {
        getProjects(db);
    }, []); // Removed the unnecessary return statement

    return projects; // Return the projects state after it's updated
}