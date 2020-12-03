import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const localData = localStorage.getItem('tasks');
  const [tasks, setTasks] = useState(localData ? JSON.parse(localData) : []);
  const addTask = (title, detail) => {
    setTasks([...tasks, {title, detail, id: uuidv1(), completed: false}]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const updateTaskComplete = (id) => {
    setTasks(tasks.map(task => {
      if(task.id === id) {
        return { ...task, completed: !task.completed}
      }
      return task;
    }))
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTaskComplete }}>
      {props.children}
    </TaskContext.Provider>
  );
}
 
export default TaskContextProvider;