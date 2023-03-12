import React from 'react'

const Input = ({ type, label, min, max, value, set }) => {
    
    
  return (
     <div className="row-wrapper gap-40">
          <div className="width-60">
              <label htmlFor={label}><h2>{label}</h2></label>
          </div>
          <input type={type} id={label} min={min} max={max} value={value} onChange={(e) => { set(e.target.value) }} />
          <input type="number" value={value} onChange={(e)=>set(e.target.value)} />
          </div>  
  )
}

export default Input