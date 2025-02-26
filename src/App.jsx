import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)   //For counting wrong letters
  const [game, setGamel] = useState(false) //For setting the game state
  let flag = false  //For checking the last clicked letter is matched or not 
  const [gamet, setGamet] = useState(false)
  const [word, setWord] = useState('')

  const wor = () => {
    const words = ["GAMES", 'FRIEND', 'HOUSE', 'GARDEN', 'LETTER', 'MATCH', 'CHECKING', 'DANCE', 'INDEPENDENT', 'ADVENTURE', 'DECORATION',
      'JOURNEY', 'TEACHER', 'SUNSHINE', 'DIAMOND', 'DOWNLOAD', 'IMPORTANT', 'NEWSPAPER', 'SUCCESSFUL', 'CELEBRATION']
    const randomIndex = Math.floor(Math.random() * words.length); // Select a random word
    setWord(words[randomIndex]);
  }

  useEffect(() => {
    wor();
  }, [])

  function Add(val) {
    if (game) return;
    if (gamet) return;

    if (word.includes(val)) {
      for (let i = 0; i < word.length; i++) {
        if (val == word[i]) {
          document.getElementById(`${i + 1}`).value = val
        }
        document.getElementById(val).style.backgroundColor = 'green'
      }
      flag = true
    }
    else {
      setCount(count + 1)
      document.getElementById(val).style.textDecoration = 'line-through'
      document.getElementById(val).disabled = true
      flag = false
    }
    if (count == 9 && flag == false) {
      setGamel(true)
    }
    let allCorrect = true;
    for (let i = 0; i < word.length; i++) {
      if (document.getElementById(`${i + 1}`).value === "") {
        allCorrect = false;
        break;
      }
    }
    if (allCorrect) {
      setGamet(true);
    }
  }

  return (
    <>
      <div id="main">
        <h1 style={{ textDecoration: 'underline' }}>Hang-Man</h1>
        <h1>{game ? (<>
          <h4>Level Failed &#128542; </h4>  <h6>Answer:- {word}</h6>
          <button className='butn' onClick={() => window.location = '/'}>Play Next</button></>) : (<img src={`/hangmanpic/${count}.jpg`} />)}</h1>
        <h1>{gamet ? (<>
          <h4>You did it! &#128522;</h4>
          <button className='butn' onClick={() => window.location = '/'}>Play Next</button></>) : null}</h1>
        <div>
          {word.split('').map((item, index) => (
            <input type='text' key={index} id={`${index + 1}`} disabled />
          ))}
        </div>
        <div id='btn-box'>
          <div className='btn'>
            <button id="Q" onClick={() => { Add('Q') }}>Q</button>
            <button id="W" onClick={() => { Add('W') }}>W</button>
            <button id="E" onClick={() => { Add('E') }}>E</button>
            <button id="R" onClick={() => { Add('R') }}>R</button>
            <button id="T" onClick={() => { Add('T') }}>T</button>
            <button id="Y" onClick={() => { Add('Y') }}>Y</button>
            <button id="U" onClick={() => { Add('U') }}>U</button>
            <button id="I" onClick={() => { Add('I') }}>I</button>
            <button id="O" onClick={() => { Add('O') }}>O</button>
            <button id="P" onClick={() => { Add('P') }}>P</button>
          </div>
          <div className='btn'>
            <button id="A" onClick={() => { Add('A') }}>A</button>
            <button id="S" onClick={() => { Add('S') }}>S</button>
            <button id="D" onClick={() => { Add('D') }}>D</button>
            <button id="F" onClick={() => { Add('F') }}>F</button>
            <button id="G" onClick={() => { Add('G') }}>G</button>
            <button id="H" onClick={() => { Add('H') }}>H</button>
            <button id="J" onClick={() => { Add('J') }}>J</button>
            <button id="K" onClick={() => { Add('K') }}>K</button>
            <button id="L" onClick={() => { Add('L') }}>L</button>
          </div>
          <div className='btn'>
            <button id="Z" onClick={() => { Add('Z') }}>Z</button>
            <button id="X" onClick={() => { Add('X') }}>X</button>
            <button id="C" onClick={() => { Add('C') }}>C</button>
            <button id="V" onClick={() => { Add('V') }}>V</button>
            <button id="B" onClick={() => { Add('B') }}>B</button>
            <button id="N" onClick={() => { Add('N') }}>N</button>
            <button id="M" onClick={() => { Add('M') }}>M</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
