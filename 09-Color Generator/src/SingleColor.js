import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb , weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bga = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setAlert(false)
    },2000)
    return ()=>{clearInterval(timeOut)}
  },[alert])

  return (
    <article className={`color ${index>10 && 'color-light' }`} style={{backgroundColor: `rgb(${bga})`}} 
    onClick={()=>{
      setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }
    }>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p>copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
