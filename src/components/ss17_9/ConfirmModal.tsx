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
        <div className="modal-overlay">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Xác nhận</h3>
                        <div><button className="btn-close" onClick={onCancel}>×</button></div>
                    </div>
                    <hr />
                    <div className="modal-body">
                        <p>Bạn có xác nhận xóa công việc <b>{todo?.text}</b> không?</p>
                    </div>
                    <hr />
                    <div className="modal-footer">
                        <button className="btn btn-cancel" onClick={onCancel}>Hủy</button>
                        <button className="btn btn-confirm" onClick={onConfirm}>Đồng ý</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;