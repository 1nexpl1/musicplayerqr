import React, { useEffect, useState } from 'react'
import s from './TimeLine.module.css'

const TimeLine = (props) => {
  const handleProgressChange = () => {
    props.audioRef.current.currentTime = props.progressBarRef.current.value;
  };
  return (
    <div className={s.wrapperTimeLine}>
      <span className={s.time}>{props.formatTime(props.time)}</span>
      <input
        type="range"
        ref={props.progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className={s.time}>{props.formatTime(props.duration)}</span>
    </div>
  )
}

export default TimeLine