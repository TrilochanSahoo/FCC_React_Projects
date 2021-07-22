import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [para , setPara] = useState([])

  const formHandler = (event)=>{
    event.preventDefault()
    let amount = parseInt(count)
    if (count<=0){
      amount = 1
    }
    if(count>8){
      amount = 8
    }
    setPara(data.slice(0,amount))
  }
  
  return (
  <section className="section-center">
    <h2>
      Lorem Ipsum generator
    </h2>
    <form className="lorem-form" onSubmit={formHandler}>
      <label htmlFor="amount">Paragraph : </label>
      <input type="number" name="amount" id="amount" value={count} min="0" onChange={(event)=>setCount(event.target.value)}></input>
      <button type="submit" className="btn">Generate</button>
    </form>
    <article className="result">
      {count>8 ? <p>Available lorem is 8 .</p>:''}
      {para.map((item,index)=>{
        return (
          <p key={index}>{item}</p>
        )
      })}
    </article>
  </section>
  )
}

export default App;
