import { useState, useEffect } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import firebaseapp from "../firebase";
import moment from 'moment';
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

export function useFilteredTasks(tasks, selectedProject) {
    const [filteredTasks, setFilteredTasks] = useState([]);
  
    useEffect(() => {
      let data;
  
      if (selectedProject === 'today') {
        const todayDateFormatted = moment().format('DD/MM/YYYY');
        data = tasks.filter((task) => task.date === todayDateFormatted);
      } else if (selectedProject === 'next 7 days') {
        const currentDate = moment();
        const oneWeekFromNow = currentDate.clone().add(7, 'days');
        data = tasks.filter((task) => {
          const taskDate = moment(task.date, 'DD/MM/YYYY');
          return taskDate.isBetween(currentDate, oneWeekFromNow, null, '[]');
        });
      } else if (selectedProject === 'next 30 days') {
        const currentDate = moment();
        const thirtyDaysFromNow = currentDate.clone().add(30, 'days');
        data = tasks.filter((task) => {
          const taskDate = moment(task.date, 'DD/MM/YYYY');
          return taskDate.isBetween(currentDate, thirtyDaysFromNow, null, '[]');
        });
      } else if (selectedProject === 'all tasks') {
        data = tasks;
      } else {
        data = tasks.filter((task) => task.projectName === selectedProject);
      }
  
      setFilteredTasks(data || []); // Initialize with an empty array if data is undefined
    }, [tasks, selectedProject]);
  
    return filteredTasks;
  }

  export function useUser() {
    const [user, setUser] = useState(null);

    async function getUser(db) {
        try {
            const usersCollection = collection(db, 'users');
            const userQuery = query(usersCollection, where('user_id', '==', '1')); // Adjust the field name and value

            const userSnapshot = await getDocs(userQuery);

            if (!userSnapshot.empty) {
                // Assuming there is only one user with the given user_id
                const userData = userSnapshot.docs[0].data();
                setUser({
                    id: userSnapshot.docs[0].id,
                    ...userData
                });
            } else {
                console.log('User not found');
                setUser(null);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
        }
    }

    useEffect(() => {
        getUser(db);
    }, [db]);

    return user;
}