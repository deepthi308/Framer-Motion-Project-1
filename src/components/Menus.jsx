import React, { useState, useEffect } from 'react'
import Dottedsquare from './Dottedsquare'
import Input from "./Input"
const Menus = () => {

const [x, setX] = useState(0)
const [y, setY] = useState(0)
const [rotate, setRotate] = useState(0)
const [value, setValue] = useState(0)
    

    
   
    return (
    <div className="row-wrapper gap-500">
    <Dottedsquare x={x} y={y} rotate={rotate} />       
    <div className='col-wrapper'>
          <Input type="range" value={x} label="X" min={-200} max={200} set={setX} /> 
          <Input type="range" value={y} label="Y" min={-200} max={200} set={setY} />    
          <Input type="range" value={rotate } label="rotate" min={-200} max={200} set={setRotate} />   
            </div>
            </div>
  )
}

export default Menus


        
        
        
      