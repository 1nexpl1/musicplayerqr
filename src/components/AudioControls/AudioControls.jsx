import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './AudioControls.module.css'
import { FaPlay, FaPause } from "react-icons/fa6";
import Buttons from './Buttons/Buttons';
import TimeLine from './TimeLine/TimeLine';
const AudioControls = ({file}) => {
    const audioRef = useRef()
    const progressBarRef = useRef()
    const playAnimationRef = useRef();

    

    const [play, setPlay] = useState(false)
    const [time, setTime] = useState(0)
    const [duration, setDuration] = useState(0);
    
    const onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
        progressBarRef.current.max = audioRef.current.duration;
    }

    
    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTime(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTime]);


    useEffect(() => {
        if (play) {
            audioRef.current.play()
            playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
            audioRef.current.pause()
            cancelAnimationFrame(playAnimationRef.current)
        }

    }, [play, audioRef, repeat])


    const formatTime = (time1) => {
        if (time1 && !isNaN(time1)) {
            const minutes = Math.floor(time1 / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time1 % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };
    return (
        <>
            <audio className={s.player} ref={audioRef} onLoadedMetadata={()=>onloadedmetadata()} src={file} />
            <Buttons play={play} setPlay={setPlay} setTime={setTime} time={time} audioRef={audioRef} progressBarRef={progressBarRef}/>
            <TimeLine formatTime={formatTime} duration={duration} time={time} setDuration={setDuration} audioRef={audioRef} progressBarRef={progressBarRef}/>
        </>
    )
}

export default AudioControls