import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import firebaseapp from "../firebase";
import 'firebase/compat/firestore';

import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseapp);

export function useTasks(){
    const [tasks, setTasks] = useState([])

            useEffect(() => {

                async function getTasks(db) {
                    const tasksCol = collection(db, 'tasks');
                    const taskSnapshot = await getDocs(tasksCol);
                    
                    const taskList = taskSnapshot.docs.map(doc => {
                        return {
                            id : doc.id,
                            ...doc.data()
                        }
                    })            
                    
                    console.log(taskList)
                    setTasks(taskList)
                    console.log("this is tasks state now: " + tasks)
        
                    
                  }
        
                  getTasks(db)




            },[])
          
    
   

}

export default useTasks

export function useProjects(){
    const [projects, setProjects] = useState([])

            useEffect(() => {

                async function getProjects(db) {
                    const projectsCol = collection(db, 'projects');
                    const projectsSnapshot = await getDocs(projectsCol);
                    
                    const projectList = projectsSnapshot.docs.map(doc => {
                        return {
                            id : doc.id,
                            ...doc.data()
                        }
                    })            
                    
                    console.log(projectList)
                    setProjects(projectList)
                    console.log("this is projects state now: " + projects)
        
                    
                  }
                  
        
    
                  getProjects(db)



            },[])
          
    
   

}