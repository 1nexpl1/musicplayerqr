import React from 'react'
import s from './Buttons.module.css'
import { FaPlay, FaPause, FaArrowRotateLeft, FaArrowRotateRight, FaVolumeXmark, FaVolumeOff, FaVolumeLow, FaVolumeHigh } from "react-icons/fa6";

const Buttons = (props) => {

    let backTenSec = () => {
        props.audioRef.current.currentTime = props.audioRef.current.currentTime - 10
    }
    let forTenSec = () => {
        
        props.audioRef.current.currentTime = props.audioRef.current.currentTime + 10
    }


    return (
        <div className={s.butWrapper}>
            <FaArrowRotateLeft className={s.button} onClick={()=>backTenSec()} />
            {props.play ? (
                <FaPause className={s.button} onClick={() => props.setPlay(false)} />
            ) : (
                <FaPlay className={s.button} onClick={() => props.setPlay(true)} />
            )}
            <FaArrowRotateRight className={s.button} onClick={()=>forTenSec()} />
        </div>
    )
}

export default Buttons