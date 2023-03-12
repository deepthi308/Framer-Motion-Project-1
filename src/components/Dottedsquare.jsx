import React from 'react'
import { motion } from 'framer-motion'

const Dottedsquare = ({ x, y, rotate }) => {
  
  
  return (
    <motion.div className='square'
      animate={{ x:parseInt(x), y:parseInt(y), rotate:parseInt(rotate)}}
      transition={{ type: "spring" }}
    >
          
    </motion.div>
  )
}

export default Dottedsquare