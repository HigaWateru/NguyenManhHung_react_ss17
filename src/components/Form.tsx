import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState<string>('')
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nhập nội dung' style={{
                border: '1px solid #333',
                backgroundColor: 'white',
                color: 'black',
                padding: '8px 12px',
                borderRadius: '4px',
                outline: 'none',
                width: '100%',
            }}/>
            <p>{name}</p>
        </div>
    )
}
