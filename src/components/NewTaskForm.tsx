import React, { useState } from 'react'
import { typedHooks } from '../store'

const NewTaskForm = () => {
  const [title, setTitle] = useState('')
  const [done, setDone] = useState(false)

  const addTask = typedHooks.useStoreActions((state) => state.taskModel.addTask);

  return (
    <form onSubmit={(e) => addTask({ event: e, title, done })}>
      <h2>New todo</h2>

      <label htmlFor='title'>I want to  </label><br />
      <input type='text' placeholder='...' value={title} onChange={e => setTitle(e.target.value)}></input><br />
      <label htmlFor='alreadyDone'>Done? </label>
      <input id='alreadyDone' type='checkbox' checked={done} onChange={e => setDone(e.target.checked)}></input><br />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewTaskForm