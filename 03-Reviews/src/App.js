import React from 'react';
import Review from './Review';
function App() {
  return(
    <main>
      <section className="container">
        <div className="title">
          <h2>reviews project</h2>
          <hr className="underline"></hr>
        </div>
        <Review></Review>
      </section>
    </main>
    )
}

export default App;
