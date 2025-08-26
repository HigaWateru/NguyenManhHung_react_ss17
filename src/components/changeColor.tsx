import React, {useState} from "react"

export default function ChangeColor() {
    const [color, setColor] = useState("black");

    const changeColor = () => {
        setColor(color === "black" ? "red" : "black");
    }

    return (
        <div>
            <p style={{ color }}>Tiêu đề văn bản</p>
            <button onClick={changeColor} style={{ 
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid black"
            }}>Thay đổi màu</button>
        </div>
    )
}
