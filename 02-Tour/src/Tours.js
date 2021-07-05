import React from 'react';
import Tour from './Tour';
const Tours = ({places}) => {
  return (
    <section>
      <header className="title">
        <h1>our Tours</h1>
        <ul className="underline"></ul>
      </header>
      <div>
        {places.map((tour)=>{
          return <Tour key={tour.id} {...tour}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
