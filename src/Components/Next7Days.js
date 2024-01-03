import React, { useEffect, useState } from "react";
import moment from 'moment'
import Task from "./Task";

function Next7Days({ tasks }) {
  const [weekTasks, setWeekTasks] = useState([]);
  


  useEffect(() => {
    const currentDate = new Date();

    // Function to parse the date string in "DD/MM/YYYY" format
    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split('/');
      return new Date(`${year}-${month}-${day}`);
    };

    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(currentDate.getDate() + 7);

    const filteredTasks = tasks.filter((task) => {
      const taskDate = parseDate(task.date);
      return taskDate >= currentDate && taskDate <= oneWeekFromNow;
    });

    filteredTasks.sort((a, b) => parseDate(a.date) - parseDate(b.date));

    setWeekTasks(filteredTasks);
  }, [tasks]); // Only re-run the effect when the 'tasks' prop changes

  return (
    <div>
      {weekTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Next7Days;