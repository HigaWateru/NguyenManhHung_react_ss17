import React, { useState } from "react"

interface TodoFormProps {
    addTodo: (task: string) => void
    error: string
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo, error }) => {
    const [task, setTask] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTodo(task)
        setTask("")
    }

    return (
        <form className="d-flex mb-2" onSubmit={handleSubmit}>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <input type="text" className="form-control" placeholder="Nhập tên công việc" value={task} onChange={(e) => setTask(e.target.value)} />
                <button className="btn btn-primary ms-2" type="submit">Thêm</button>
            </div>
            {error && <p className="text-danger mt-1">{error}</p>}
        </form>
    )
}

export default TodoForm