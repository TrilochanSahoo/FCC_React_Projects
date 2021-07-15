import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Button from './Button';

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // useEffect(()=>{
  //   const lastIndex = people.length-1
  //   if(index>lastIndex){
  //     setIndex(0)
  //   }
  //   if(index<0){
  //     setIndex(lastIndex)
  //   }
  // },[index,people])

  // useEffect(()=>{
  //   const load = setInterval(()=>{
  //     setIndex(index+1)
  //   },2000)

  //   return ()=>{
  //     clearInterval(load)
  //   }
  // },[index])


  return (
    <section className="section">
      <header className="title">
        <h2>
          <span>/</span>review
        </h2>
      </header>
      <div className="section-center">
        {people.map((person,personIndex)=>{
          const {id, image,name, title, quote} = person

          let position = "nextSlide"
          if(personIndex===index){
            position = "activeSlide"
          }
          if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
            position = "lastSlide"
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img"></img>
              <h4>{name}</h4>
              <h3 className="title">{title}</h3>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"/>
            </article>
          )
        })}
        <Button click={index} clickChanger = {(index)=>{
          setIndex(index)
        }} ></Button>
      </div>
    </section>
  );
}

export default App;
