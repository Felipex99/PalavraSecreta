import React from "react"
import "./Game.css"
const GameScreen = ({categoria, palavra, verifyLetter}) =>{
    alert(categoria)
    return(
        <div className="game">
            <p className="points">
                <span>Pontuação: 000</span>
            </p>
        </div>
    )
}
export default GameScreen