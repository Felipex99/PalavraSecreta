import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import End from './components/End'
import {Palavra}  from './data/Palavra' 
const stage = [
  {id:0, name:"init"},
  {id:1 , name:"game"},
  {id:2, name:"end"}
]

function App() {
  const [count, setCount] = useState(0)
  const [gameStage, setStage] = useState(stage[0].name)

  const [palavra, setPalavra] = useState("")
  const [categoria, setCategoria] = useState("")
  const [letra, setLetra] = useState("")
  
  const escolherPalavra = ()=>{
    const categorias = Object.keys(Palavra)
    const categoria = categorias[Math.floor(Math.random()*categorias.length)]
    const palavras = Object.values(Palavra[categoria])
    const palavra = palavras[Math.floor(Math.random()*palavras.length)]
    return {categoria, palavra}
  }

  const startGame = () => {
    const {categoria, palavra} = escolherPalavra()
    const array = palavra.split("")
    setCategoria(categoria)
    setPalavra(palavra)
    setStage(stage[1].nome)
    return {palavra, categoria, array}
  }

  const verifyLetter = () => {
    setStage(stage[2].name)
  }

  const retry = () =>{
    setStage(stage[1].name)
  }

  return (
    <div className='App'>
      <div className="box">
        {gameStage === "init" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} palavra={palavra} categoria = {categoria}/>}
        {gameStage === "end" && <End retry={retry}/>}
      </div>
    </div>
  )
}

export default App
