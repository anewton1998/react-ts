import React, { FunctionComponent } from 'react';

import { Task } from "../models/task";

interface Props {
    task: Task;
    onDelete: (task: Task) => void;
}

export const TasksListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
    const onClick = () => {
        onDelete(task);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {task.name} <button className="btn btn-outline-danger" onClick={onClick}>remove</button>
        </li>
    );
};