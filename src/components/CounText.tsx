import React, {useState} from 'react'

export default function CountText() {
    const [countText, setCountText] = useState(0)
    return (
        <div>
            <textarea onChange={event => setCountText(event.target.value.length)} style={{
                width: '100%',
                height: '50px',
                border: '1px solid #333',
                borderRadius: '4px',
                padding: '8px',
                outline: 'none',
                backgroundColor: 'white',
                color: 'black',
            }}></textarea>
            <p>Số kí tự: {countText}</p>
        </div>
    )
}
