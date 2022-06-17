import React, { Key } from 'react'
import { typedHooks } from '../../store';
import TaskComponent from '../Task/Task.component'
import { Task } from '../Task/Task.types';

const FinishedTasks = () => {
  const finishedTasks: Task[] = typedHooks.useStoreState(state => state.taskModel.finishedTasks);
  return (
    <>
      <h2>Already done:</h2>
      <ul>
        {finishedTasks.map(task => <TaskComponent key={task.id as Key} task={task} />)}
      </ul>
    </>
  )
}

export default FinishedTasks