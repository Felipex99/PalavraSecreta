import React from "react"
import "./End.css"
const End = ({retry}) =>{
    return (
        <>
            <h1>QUE PENA SUAS CHANCES ACABARAM</h1>
            <button onClick={retry}>JOGAR NOVAMENTE</button>
        </>
    )
}

export default End