import React from 'react'
import s from './Info.module.css'
const Info = (props) => {
  return (
    <div className={s.wrapper}>
        <div className={s.title}>{props.title}</div>
        <div className={s.autor}>{props.autor}</div>
    </div>
  )
}

export default Info