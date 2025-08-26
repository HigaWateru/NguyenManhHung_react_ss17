import React from "react"
import TodoItem from "./TodoItem"
import type { Todo } from "./task.data"

interface TodoListProps {
    todos: Todo[]
    toggleComplete: (index: number) => void
    confirmDelete: (todo: Todo) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, confirmDelete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} toggleComplete={toggleComplete} confirmDelete={confirmDelete} />
            ))}
        </ul>
    )
}

export default TodoList
