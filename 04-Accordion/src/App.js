import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data)
  return (
    <div className="container">
      <h2>Questions and Answers</h2>
      <section className="question">
        {questions.map((Question)=>{
          return <SingleQuestion key={Question.id} {...Question}></SingleQuestion>
        })}
      </section>
    </div>
  );
}

export default App;
