import React from 'react'
const product = {
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10
}
export default function Ex02() {
    const [productState, setProductState] = React.useState(product)
    return (
        <div>
            <h2>Thông tin sản phẩm</h2>
            <p>ID: {productState.id}</p>
            <p>Name: {productState.name}</p>
            <p>Price: {productState.price}$</p>
            <p>Quantity: {productState.quantity}</p>
        </div>
    )
}
