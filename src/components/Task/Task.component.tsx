import React from 'react'
import { typedHooks } from '../../store'
import { TaskProps } from './Task.types'


const TaskComponent = ({ task }: TaskProps) => {
  const deleteTask = typedHooks.useStoreActions(state => state.taskModel.deleteTask)
  return (
    <ul style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.title} <button onClick={() => deleteTask({ id: task.id })}>Delete</button></ul>
  )
}

export default TaskComponent