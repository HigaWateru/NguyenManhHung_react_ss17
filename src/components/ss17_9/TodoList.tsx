import React from "react"
import TodoItem from "./TodoItem"
import type { Todo } from "./task.data"

interface TodoListProps {
    todos: Todo[]
    toggleComplete: (index: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} toggleComplete={toggleComplete} />
            ))}
        </ul>
    )
}

export default TodoList