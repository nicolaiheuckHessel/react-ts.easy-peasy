import { Computed } from "easy-peasy";
import React, { Component } from "react";
import { typedHooks } from "../store";
import { TaskModelType } from "../StoreModel";
import FinishedTasks from "./FinishedTasks/FinishedTasks.component";
import NewTaskForm from "./NewTaskForm";
import { Task } from "./Task/Task.types";
import UnFinishedTasks from "./UnFinishedTasks/UnFinishedTasks.component";

const app = () => {
  
  return (
    <>
      <NewTaskForm />
      <UnFinishedTasks />
      <FinishedTasks />
    </>
  )
}

export default app