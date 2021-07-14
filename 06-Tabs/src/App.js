import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [value,setValue] = useState(0)

  const fetchJobData = async()=>{
    const response = await fetch(url)
    const newJob = await response.json()
    setJobs(newJob)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobData()
  },[])


  if(loading){
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }

  const {id, title, dates,duties,company } = jobs[value] 
  return (
    <section className="section">
      <header className="title">
        <h2>job desc</h2>
        <div className="underline"></div>
      </header>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job,index)=>{
            return(
              
              <button key={index} onClick={()=>{setValue(index)}} className={`job-btn ${index===value && 'active-btn'}`}>{job.company}</button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          <p>{duties.map((job,index)=>{
            return (
              <div key = {index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{job}</p>
              </div>
            )
          })}</p>
        </article>
      </div>
      <button type="button" className="btn" onClick={()=>{setValue(value+1)}}>
        more info
      </button>
    </section>
  )
}

export default App
