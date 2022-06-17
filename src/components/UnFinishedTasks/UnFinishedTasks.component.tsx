import React, { Key } from 'react'
import { typedHooks } from '../../store';
import TaskComponent from '../Task/Task.component';
import { Task } from '../Task/Task.types';

const UnFinishedTasks = () => {
  const unFinishedTasks: Task[] = typedHooks.useStoreState(state => state.taskModel.unFinishedTasks);
  return (
    <>
      <h2>Things to do:</h2>
      <ul>
        {unFinishedTasks.map(task => <TaskComponent key={task.id as Key} task={task} />)}
      </ul>
    </>
  )
}

export default UnFinishedTasks