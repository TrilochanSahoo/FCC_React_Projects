import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
  
  const removeTour = (id)=>{
    const updateTour = tours.filter((tour)=>{
      return tour.id!==id
    })
    setTours(updateTour)
  } 
  
  const fetchTourData = async ()=>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tour = await response.json() 
      setLoading(false)
      setTours(tour)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }


  useEffect(()=>{
    fetchTourData()
  },[])
  
  if(loading){
    return (
      <main>
        <Loading className="loading"/>
      </main>
    )
  }
  if(tours.length===0){
    return(
      <main>
        <header className="title">
          <h1>No tour left</h1>
        <button className="btn" onClick={()=>{fetchTourData()}}>Refresh</button>
        </header>
      </main>
    )
  }
  
  return (
    <main>
      <Tours places={tours} remove={removeTour}></Tours>
    </main>
  )
}

export default App
