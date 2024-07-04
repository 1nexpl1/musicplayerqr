import React from 'react'
import s from './AlbumPhoto.module.css'
const AlbumPhoto = (props) => {
  return (
    <>
    <img className={s.photo} src={props.image} alt='photo' />
    </>
  )
}

export default AlbumPhoto