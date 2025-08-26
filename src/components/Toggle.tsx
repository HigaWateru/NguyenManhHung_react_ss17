import React from 'react'

export default function Toggle() {
    const [show, setShow] = React.useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)} style={{
                fontSize: '13px',
                padding: '8px 12px',
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #333',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>{show ? "Ẩn" : "Hiện"}</button>
            <p>{show ? "Tiêu đề văn bản" : ""}</p>
        </div>
    )
}
