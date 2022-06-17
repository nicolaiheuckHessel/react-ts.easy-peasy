import React from 'react'
import { TaskProps } from './Task.types'


const TaskComponent = ({ task }: TaskProps) => {
  return (
    <ul style={{textDecoration: task.done ? 'line-through' : ''}}>{task.title}</ul>
  )
}

export default TaskComponent