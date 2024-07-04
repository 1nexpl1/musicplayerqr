import React from 'react'
import s from './InfoName.module.css'

const InfoName = (props) => {
  return (
    <div className={s.name}>{props.name}</div>
  )
}

export default InfoName