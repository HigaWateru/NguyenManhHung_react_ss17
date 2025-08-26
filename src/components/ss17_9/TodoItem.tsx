import React from "react"
import type { Todo } from "./task.data"

interface TodoItemProps {
    todo: Todo
    index: number
    toggleComplete: (index: number) => void
    confirmDelete: (todo: Todo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleComplete, confirmDelete }) => {
    return (
        <li className="list-item d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)} className="me-2" />
                <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                    {todo.text}
                </span>
            </div>
            <div>
                <button className="btn btn-sm btn-warning me-2">✏️</button>
                <button className="btn btn-sm btn-danger" onClick={() => confirmDelete(todo)}>🗑️</button>
            </div>
        </li>
    )
}

export default TodoItem
