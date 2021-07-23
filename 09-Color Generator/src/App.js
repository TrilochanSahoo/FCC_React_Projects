import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('')
  const [list, setList] = useState([])
  const [error,setError] = useState(false)

  const submitHandler = (event)=>{
    event.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }
    catch(error){
      setError(true)
    }
  }

  return (
    <>
    <section className="section container">
      <h2>Color Generator</h2>
      <form onSubmit={submitHandler}>
        <input className={`${error ? 'error' : null}`} type="text" onChange={(event)=>{
          setColor(event.target.value)
        }} value={color} placeholder="#ccffcc"></input>
        <button className='btn' type="submit">Generate</button>
      </form>
    </section>
    <section className="colors">
      {
        list.map((color, index)=>{
          return (
            <SingleColor key={index} {...color} hexColor={color.hex} index={index}></SingleColor>
          )
        })
      }
    </section>
    </>
  )
}

export default App
