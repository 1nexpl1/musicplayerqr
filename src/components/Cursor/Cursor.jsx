import React, { useEffect, useState } from 'react'
import s from './Cursor.module.css'
import {motion} from 'framer-motion'
const Cursor = () => {
  const [largeCircle, setLargeCircle] = useState({x: 0, y:0})
  const [smallCircle, setSmallCircle] = useState({x: 0, y: 0})

  useEffect(() => {
    const mousemove = (e) =>{
        setLargeCircle({x: e.clientX, y: e.clientY})
        setSmallCircle({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', mousemove) 
    return () => {
      window.removeEventListener('mousemove', mousemove)
    }
  }, [])
  
  return (
    <div>
        <motion.div 
        animate = {{x: largeCircle.x-24, y: largeCircle.y-24, transition:{type: 'spring'}}}
        className={s.largeCircle}>
        </motion.div>
        <motion.div 
        animate = {{x: smallCircle.x-4, y: smallCircle.y-4}}
        className={s.smallCircle}>
        </motion.div>
    </div>
  )
}

export default Cursor