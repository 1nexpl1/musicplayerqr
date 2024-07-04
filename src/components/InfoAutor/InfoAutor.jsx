import React from 'react'
import s from './InfoAutor.module.css'

const InfoAutor = (props) => {
  return (
    <div className={s.autor}>{props.autor}</div>
  )
}

export default InfoAutor