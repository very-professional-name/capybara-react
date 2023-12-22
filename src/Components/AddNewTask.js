import React, {useState} from 'react'
import Modal from './Modal'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import dayjs from 'dayjs';

function AddNewTask(){
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")

    return (
        <div className='AddNewTask'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    <form>
                        <div className='text'>
                            <h3>
                                Add new task!
                                </h3> 
                                <input type='text'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder='To do...'
                                autoFocus
                                />
                        </div>
                        <div className='remind'>
                            <Bell />
                            <p> Remind me</p>
                        </div>
                        <div className='pick-day'>
                            <div className='title'>
                            <CalendarDay />
                            <DatePicker 
                                value={date}
                                onChange={date => setDate(date)}
                            />

                            <p> Choose the deadline </p>
                            </div>
                        </div>
                        <div className='pick-time'>
                            <div className='title'>
                            <Clock />
                            <p> Pick an hour </p>
                            <TimePicker  
                            value={hour}
                            onChange={hour => setHour(hour) }
                            />

                            </div>
                        </div>
                        <div className='pick-project'>
                            <p> select a project </p>
                            < Palette />

                        </div>
                        <div className='projects'>
                            <div className='project active'>
                                school
                            </div>
                            <div>
                                personal
                            </div>
                        </div>
                        <div className='cancel' onClick={() => setShowModal(false)}>
                            < X />
                        </div>
                        <div className='confirm'>
                            <button> + ADD </button>
                        </div>
                       
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddNewTask