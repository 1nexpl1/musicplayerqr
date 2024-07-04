import React, { useEffect, useRef, useState } from 'react'
import AlbumPhoto from '../AlbumPhoto/AlbumPhoto'
import s from './BlockPlayer.module.css'
import AudioControls from '../AudioControls/AudioControls'
import Info from '../Info/Info'
import { fetchOneSong } from '../../http/songAPI'

const BlockPlayer = ({id}) => {
  const ref = useRef()
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [img, setImg] = useState('')
  const [file, setFile] = useState('')
  useEffect(() => {
    fetchOneSong(id).then(data=>{
      setName(data.name)
      setAuthor(data.author)
      setImg('https://srv.flowers-pro-vp.ru/'+data.img)
      setFile('https://srv.flowers-pro-vp.ru/'+data.file)
    })
  
    console.log(name, author);
  }, [])
  
  return (
    <div className={s.wrapper}>        
      <AlbumPhoto image={img} />
      <Info title = {name} autor = {author}></Info>
      <AudioControls file= {file}/>
    </div>
  )
}

export default BlockPlayer