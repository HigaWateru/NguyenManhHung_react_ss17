import { useState, useEffect } from "react"
import TodoForm from "./ss17_9/TodoForm"
import TodoList from "./ss17_9/TodoList"
import ConfirmModal from "./ss17_9/ConfirmModal"
import type { Todo } from "./ss17_9/task.data"
import './ss17_9/todo.css'

function App() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [error, setError] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(false)
    const [todoToDelete, setTodoToDelete] = useState<Todo | null>(null)

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos")
        if (savedTodos) setTodos(JSON.parse(savedTodos))
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (task: string) => {
        if (!task.trim()) {
            setError("Tên công việc không được để trống")
            return
        }
        if (todos.some((t) => t.text === task)) {
            setError("Tên công việc không được trùng")
            return
        }
        setTodos([...todos, { text: task, completed: false }])
        setError("")
    }

    const toggleComplete = (index: number) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }
    const confirmDelete = (todo: Todo) => {
        setTodoToDelete(todo)
        setShowModal(true)
    }
    const deleteTodo = () => {
        if (todoToDelete) {
            setTodos(todos.filter((t) => t !== todoToDelete))
        }
        setShowModal(false)
        setTodoToDelete(null)
    }

    return (
        <div className="container">
            <h2>Danh sách công việc</h2>
            <TodoForm addTodo={addTodo} error={error} />
            <TodoList todos={todos} toggleComplete={toggleComplete} confirmDelete={confirmDelete} />
            <p style={{
                backgroundColor: "#f0f0f0",
                width: "100%",
                padding: "5px"
            }}>
                Công việc đã hoàn thành:{" "}
                <b>{todos.filter((t) => t.completed).length}</b> / {todos.length}
            </p>

            <ConfirmModal show={showModal} onCancel={() => setShowModal(false)} onConfirm={deleteTodo} todo={todoToDelete} />
        </div>
    )
}

export default App
