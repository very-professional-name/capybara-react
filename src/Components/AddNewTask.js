import React, {useState} from 'react'
import Modal from './Modal'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import dayjs from 'dayjs';
import TaskForm from './TaskForm';

function AddNewTask(){
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")

    const projects = [
        { id : 1, name : "personal", numOfTasks : 0 },
        { id : 2, name : "work", numOfTasks : 1 },
        { id : 3, name : "other", numOfTasks : 2 }
    ]

    function handleSubmit(e){

    }

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
                    showButtons={true}
                    setShowModal={setShowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTask