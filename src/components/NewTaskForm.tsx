import React, { FunctionComponent } from "react";
import { Task } from "../models/task";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
    onChange,
    onAdd,
    task
}) => (
    <div className="form-group">
            <form onSubmit={onAdd}>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" onChange={onChange} value={task.name} />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary form-append" type="submit">Add a Task</button>
                    </div>
                </div>
            </form>
    </div>
);