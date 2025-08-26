import React from 'react'

export default function Select() {
    const [selectedCity, setSelectedCity] = React.useState('none');

    return (
        <div>
            <p>Thành phố: {selectedCity}</p>
            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} style={{
                width: '100%',
                border: '1px solid #333',
                borderRadius: '4px',
                outline: 'none',
                backgroundColor: 'white',
                color: 'black',
            }}>
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
        </div>
    )
}
