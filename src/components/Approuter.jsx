import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchSong } from '../http/songAPI';
import BlockPlayer from './BlockPlayer/BlockPlayer';
const Approuter = (props) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [nRoutes, setNRoutes] = useState()
    let routes = []
    useEffect(() => {
        fetchSong().then(data => {
            data.rows.map((el) => {
                routes.push(el)
            })

            
            
        }).finally(() => {
            
            setNRoutes(routes)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return(
            <></>
        )
    }
    
    return (
        <Routes>            
            {nRoutes.map((el) => 
                <Route path={'/'+el.link} element={<BlockPlayer id = {el.id}/>}/> 
            )}
        </Routes>
    )
}

export default Approuter