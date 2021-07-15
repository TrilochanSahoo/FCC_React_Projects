import React, { useEffect, useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';

const Button = (props)=>{
    const [index,setIndex] = useState(props.click)
    console.log(data.length-1)
    useEffect(()=>{
        const lastIndex = data.length-1
        if(index>lastIndex){
          setIndex(0)
        }
        if(index<0){
          setIndex(lastIndex)
        }
      },[index])
    
    useEffect(()=>{
        const load = setInterval(()=>{
          setIndex(index+1)
        },2000)
    
        return ()=>{
          clearInterval(load)
        }
    },[index])
    props.clickChanger(index)
    return (
        <div>
            <button className="prev" onClick={()=>{setIndex(index-1)}}>{<FiChevronLeft></FiChevronLeft>}</button>
            <button className="next" onClick={()=>{setIndex(index+1)}}>{<FiChevronRight></FiChevronRight>}</button>
        </div>
    )
}

export default Button