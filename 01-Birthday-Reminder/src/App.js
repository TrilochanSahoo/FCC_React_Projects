import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [dataValue,setDataValue]  = useState(data)

  const clickHandler = ()=>{
    setDataValue ([])
  }
  return (
    <main>
      <section className="container">
        <h3>{dataValue.length} BirthDay available.</h3>
        <List people={dataValue}></List>
        <button onClick={clickHandler}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
