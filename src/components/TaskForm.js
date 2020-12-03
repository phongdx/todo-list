import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [hasError, setHasError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() !== '' && detail.trim() !== '') {
      addTask(title, detail);
      setTitle('');
      setDetail('');
      setHasError(!hasError);
    } else {
      setHasError(true);
    }
  }
  console.log(hasError)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Detail" value={detail}
        onChange={(e) => setDetail(e.target.value)} />
      {hasError ? <div>Please enter the full title and detail to add task!</div> : <div />}
      <input type="submit" value="Add Task" />
    </form>
  );
}
 
export default TaskForm;