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

        console.log(`Fetched ${taskSnapshot.size} documents`);
        const WIPArray = []
        const taskList = taskSnapshot.docs.map(doc => {
            return {
                id : doc.id,
                ...doc.data()
            }
            setTasks(taskList)
    })
  

        console.log(taskList)

        return tasks

      }

    useEffect(() => {
      
        getTasks(db)
  
      
  
      
    }, [db]); 
  }


export function useProjects(){
    const [projects, setProjects] = useState([])


    async function getProjects(db) {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectList = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
    
          setProjects(projectList);
        
          return projects
        
      }


            useEffect(() => {

                
                  
                getProjects(db)


                 

            },[])
          
    
   

}

