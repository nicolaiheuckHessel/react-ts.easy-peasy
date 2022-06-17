import React from "react";
import FinishedTasks from "./FinishedTasks/FinishedTasks.component";
import NewTaskForm from "./NewTaskForm";
import ReloadTasksButton from "./ReloadTasksButton";
import UnFinishedTasks from "./UnFinishedTasks/UnFinishedTasks.component";

const app = () => {
  return (
    <>
      <ReloadTasksButton />
      <NewTaskForm />
      <UnFinishedTasks />
      <FinishedTasks />
    </>
  )
}

export default app