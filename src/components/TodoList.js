import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetail from './TaskDetail';

const TodoList = () => {
    const { tasks } = useContext(TaskContext);
    return tasks.length ? (
            <div className='todo-list' >
                <ul>
                    {tasks.map(task => {
                        return (
                            <TaskDetail task={task}/>
                        )
                    })}
                </ul>
            </div>
        ) : (
            <div className='empty'>There is no task left. Plz add more tasks below</div>
    );
}
 
export default TodoList;