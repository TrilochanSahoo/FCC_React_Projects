import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person,setPerson] = useState(0)
  const {name,job,image,text} = people[person]

  const checkList = (index)=>{
    if(index > people.length-1){
      return 0
    }
    if(index < 0){
      return people.length-1
    }
    return index
  }
  const preReview = ()=>{

    setPerson((index)=>{
      let newIndex = index - 1
      return checkList(newIndex)
    })

  }
  const nextReview = ()=>{
    setPerson((index)=>{
      let newIndex = index + 1
      return checkList(newIndex)
    })
    
  }

  const randomReview = ()=>{
    let randomNum = Math.floor(Math.random()*people.length)
    if(randomNum ===person){
      randomNum = person + 1
    }
    setPerson(checkList(randomNum))
  }

  
  return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon"><FaQuoteRight/></span>
        </div>
        <h3 className="author">{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button className="prev-btn" onClick={preReview}>
            <FaChevronLeft/>
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight/>
          </button>
        </div>
        <button className="random-btn" onClick={randomReview}>
            Random
        </button>
      </article>
  );
};

export default Review;
