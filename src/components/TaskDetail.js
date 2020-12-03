import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetail = ({task}) => {
    const { removeTask, updateTaskComplete } = useContext(TaskContext);
    return (
        <li className='title' key={task.id}>
            <div className='row'>
                <div className={`text-column ${task.completed ? "completed" : ""}`}>
                    <div className='title'>{task.title}</div>
                    <div className='detail'>{task.detail}</div>
                </div>
                <div className='button-column'>
                   <button className="button" onClick={() => updateTaskComplete(task.id)}>
                        <i className="fa fa-check"></i>
                   </button>
                   <button className="button" onClick={() => removeTask(task.id)}>
                        <i className="fa fa-trash"></i>
                   </button>
                </div>
            </div>
        </li>
    );
}
 
export default TaskDetail;