import { useState, useEffect } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import firebaseapp from "../firebase";
import moment from 'moment';
import 'firebase/compat/firestore';

import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseapp);

export function useCapybara() {
  const [capybara, setCapybara] = useState(null);

  async function getCapybara(db) {
    try {
      const capybaraCol = collection(db, 'capybara');
      const capybaraSnapshot = await getDocs(capybaraCol);

      if (!capybaraSnapshot.empty) {
        // Assuming there is only one capybara document
        const capybaraData = capybaraSnapshot.docs[0].data();
        setCapybara({
          id: capybaraSnapshot.docs[0].id,
          ...capybaraData
        });
      } else {
        console.log('No capybara found');
        setCapybara(null);
      }
    } catch (error) {
      console.error('Error fetching capybara:', error);
      setCapybara(null);
    }
  }

  useEffect(() => {
    const db = getFirestore();
    getCapybara(db);
  }, []); // The hook fetches capybara only once when mounted

  return capybara;
}




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
    }, []);

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
      }

      else if (selectedProject === 'old tasks'){
        const currentDate = moment();
      data = tasks.filter((task) => {
        const taskDate = moment(task.date, 'DD/MM/YYYY');
        return taskDate.isBefore(currentDate, 'day');});

      }
      
      
      
      
      
      else {
        data = tasks.filter((task) => task.projectName === selectedProject);
      }
  
      setFilteredTasks(data || []); // Initialize with an empty array if data is undefined
    }, [tasks, selectedProject]);
  
    return filteredTasks;
  }

  export function useUser(user_id, db) {
    const [user, setUser] = useState(null);
  
    async function getUser() {
      try {
        const usersCollection = collection(db, 'users');
        const userQuery = query(usersCollection, where('user_id', '==', user_id));
  
        const userSnapshot = await getDocs(userQuery);
  
        if (!userSnapshot.empty) {
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
      getUser();
    }, [user_id, db]);
  
    return user;
  }