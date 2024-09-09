import React from "react"
import "./StartScreen.css"
const StartScreen = ({startGame}) =>{
    return(
        <div className="start">
            <h1>PALAVRA SECRETA</h1>
            <p>Clique para começar o jogo</p>
            <button onClick={startGame}>Iniciar</button>
        </div>
    )
}

export default StartScreen