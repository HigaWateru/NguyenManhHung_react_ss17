import React from 'react'

export default function Ex01() {
    const [name, setName] = React.useState<string>("Nguyễn Mạnh Hùng")
    return (
        <h2>Họ và tên: {name}</h2>
    )
}
