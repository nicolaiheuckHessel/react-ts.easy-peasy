import React from 'react'
import { typedHooks } from '../store'

const ReloadTasksButton = () => {
    const reloadThunk = typedHooks.useStoreActions(state => state.taskModel.reload);
    console.log(reloadThunk);
    
    return (
        <button onClick={() => reloadThunk()}>Reload</button>
    )
}

export default ReloadTasksButton