import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import User from './Components/User';
import AddNewTask from './Components/AddNewTask';
import Calendar from './Components/Calendar';
import EditTask from './Components/EditTask';
import Projects from './Components/Projects';
import Tasks from './Components/Tasks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Sidebar>
        <User />
        <AddNewTask />
        <Calendar/>
        <Projects />
      </Sidebar>

      <Main>
        <Tasks />
        <EditTask />

      </Main>
      </LocalizationProvider>
    </div>
    
  );
}

export default App;
