import React from 'react';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import TaskContextProvider from './contexts/TaskContext';

function App() {
  return (
    <div className="App">
        <TaskContextProvider>
          <Navbar />
          <TodoList />
          <TaskForm />
        </TaskContextProvider>
    </div>
  );
}

export default App;
