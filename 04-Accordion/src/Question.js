import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showIcon, setShowIcon] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>
          {title}
        </h4>
        <button className="btn" onClick={()=>{setShowIcon(!showIcon)}}>{showIcon ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {showIcon ? <p>{info}</p> : ''}
    </article>
  );
};

export default Question;
