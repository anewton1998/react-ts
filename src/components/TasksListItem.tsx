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
        <li>
            {task.name} <button onClick={onClick}>x</button>
        </li>
    );
};