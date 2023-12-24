import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import dayjs from 'dayjs';

function TaskForm({

    handleSubmit,
    header = false,
    text, setText,
    date, setDate,
    hour, setHour,
    projects, showButtons = false, setShowModal = false
}) {

    return (

        <div>
            <form onSubmit={handleSubmit} className='TaskForm'>
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

                    </div>
                </div>
                <div className='pick-time'>
                    <div className='title'>
                        <Clock />
                        <TimePicker
                            value={hour}
                            onChange={hour => setHour(hour)}
                        />

                    </div>
                </div>
                <div className='pick-project'>
                    <p> select a project </p>
                    < Palette />

                </div>
                <div className='projects'>
                    {projects.map(project =>

                        <div className='project' key={project.id}>
                            {project.name}
                        </div>


                    )}
                </div>
                {

                    showButtons &&
                    <div>
                        <div className='cancel' onClick={() => setShowModal(false)}>
                            < X />
                        </div>
                        <div className='confirm'>
                            <button> + ADD </button>
                        </div>


                    </div>

                }

            </form>
        </div>


    )
}

export default TaskForm