import React, {useState, useContext, useEffect} from 'react'
import Modal from './Modal'
import * as moment from 'moment';
import dayjs from 'dayjs';
import TaskForm from './TaskForm';
import { TaskContext } from '../context';
import { calendarItems } from '../Components/constants';
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import firebaseapp from '../firebase';
import randomColor from 'randomcolor';




function AddNewTask(){

    const { selectedProject, projects } = useContext(TaskContext)
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [taskProject, setTaskProject] = useState(selectedProject)
    const db = getFirestore(firebaseapp);

    async function handleSubmit(e){
        e.preventDefault()
        if ( text ) {
            console.log("i didnt take a shit 1")
            await addDoc(collection(db, "tasks"), {
                text: text,
                checked:false,
                date: dayjs(date).format('DD/MM/YYYY'),
                hour: dayjs(hour).format('HH:mm'),
                projectName: taskProject,
                color: randomColor(),
                value: 2

                
            
              });
              setShowModal(false)
              setText('')
              setDate(new Date())
              setHour(new Date())

        }

        console.log("i didnt take a shit 2")
    }

    useEffect(() => {

            setTaskProject(selectedProject)
    }, [selectedProject])

    return (
        <div className='AddNewTask'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Task
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TaskForm
                    handleSubmit={handleSubmit}
                    heading='Add new to do!'
                    text={text}
                    setText={setText}
                    date={date}
                    setDate={setDate}
                    hour={hour}
                    setHour={setHour}
                    projects={projects}
                    taskProject={taskProject}
                    setTaskProject={setTaskProject}
                    showButtons={true}
                    setShowModal={setShowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTask