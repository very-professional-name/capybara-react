import React from 'react';
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import User from '../Components/User';
import AddNewTask from '../Components/AddNewTask';
import Calendar from '../Components/Calendar';
import EditTask from '../Components/EditTask';
import Projects from '../Components/Projects';
import Tasks from '../Components/Tasks';
import Capybara from '../Components/Capybara';
import '../App.css';
function HomePage() {
  return (
    <div className='HomePage'>
      <Sidebar>
        <User />
        <AddNewTask />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <Tasks />
        {/* Add other components/routes as needed */}
        <EditTask />
      </Main>
      <Capybara />
    </div>
  );
}

export default HomePage;