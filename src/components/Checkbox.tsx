import React from 'react'
const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"]

export default function Checkbox() {
    const [hobbies, setHobbies] = React.useState<string[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setHobbies(prev => prev.includes(value) ? prev.filter(hobby => hobby !== value) : [...prev, value])
    }
    return (
        <div>
            <p>Sở thích: {hobbies.join(", ")}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                {options.map(option => (
                    <label key={option}>
                        <input type="checkbox" value={option} checked={hobbies.includes(option)} onChange={handleChange} />{option}
                    </label>
                ))}
            </div>
        </div>
    )
}
