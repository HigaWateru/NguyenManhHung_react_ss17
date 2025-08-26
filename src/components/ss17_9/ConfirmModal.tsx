import React from "react"
import type { Todo } from "./task.data"

interface ConfirmModalProps {
    show: boolean
    onCancel: () => void
    onConfirm: () => void
    todo: Todo | null
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ show, onCancel, onConfirm, todo }) => {
  if (!show) return null

    return (
        <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Xác nhận</h5>
                    <button className="btn-close" onClick={onCancel}></button>
                </div>
                <div className="modal-body">
                    <p>Bạn có xác nhận xóa công việc <b>{todo?.text}</b> không?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={onCancel}>Hủy</button>
                    <button className="btn btn-primary" onClick={onConfirm}>Đồng ý</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;