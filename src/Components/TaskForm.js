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
    taskProject, setTaskProject,
    projects, showButtons = false, setShowModal = false
}) {

    return (

        <div>
            <form onSubmit={handleSubmit} className='TaskForm'>
                <div className="text">
                    {
                        header && 
                        <h3>{header}</h3>
                    }
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='To do ...'
                        autoFocus
                    />
                </div>
                <div className="remind">
                    <Bell />
                    <p>Remind Me!</p>
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay />
                        <p>Choose a day</p>
                    </div>
                    <DatePicker
                        
                        onChange={(date) => setDate(date)}
                    />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock />
                        <p>Choose time</p>
                    </div>
                    <TimePicker
                        
                        onChange={hour => setHour(hour)}
                    />
                </div>
                <div className="pick-project">
                    <div className="title">
                        <Palette />
                        <p>Choose a project</p>
                    </div>
                    <div className="projects">
                        {
                            projects.length > 0 ?
                            projects.map( project => 
                                <div
                                    className={`project ${taskProject === project.projectName ? "active" : ""}`}
                                    onClick={() => setTaskProject(project.projectName)}
                                    key={project.id}
                                >
                                    {project.projectName}
                                </div>    
                            )
                            :
                            <div style={{color:'#ff0000'}}>
                                Please add a project before proceeding
                            </div>
                        }
                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </div>
                }
            </form>
        </div>


    )
}

export default TaskForm