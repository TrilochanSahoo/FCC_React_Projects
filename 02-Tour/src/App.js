import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

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
  
  return (
    <main>
      <Tours places={tours}></Tours>
    </main>
  )
}

export default App
