import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
  removeTask: (title: string) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem">
      <hr />
      <li>
        <div className="shadow-md border border-slate-100 p-2 m-2">
          <h2 className="text-base font-bold my-1">{props.title}</h2>
          <p className="text-sm text-slate-500">{props.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description:{props.description}
          </p>
          <button
            className="deleteTaskButton bg-red-400 p-1 rounded"
            onClick={() => props.removeTask(props.title)}
          >
            Delete Task
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
