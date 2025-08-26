import React from "react"
import type { Todo } from "./task.data"

interface TodoItemProps {
    todo: Todo
    index: number
    toggleComplete: (index: number) => void
    confirmDelete: (todo: Todo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleComplete }) => {
    return (
        <li className="list-item">
            <div>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)} className="me-2" />
                <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.text}</span>
            </div>
            <div>
                <button>✏️</button>
                <button>🗑️</button>
            </div>
        </li>
    )
}

export default TodoItem