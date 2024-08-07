import React, { useEffect, useRef, useState } from "react";
import music from './macan-kino-mp3.mp3'
import alb from './kinoalb.jpg'
import AlbumPhoto from "./components/AlbumPhoto/AlbumPhoto";
import Cursor from "./components/Cursor/Cursor";
import Info from "./components/Info/Info";
import BlockPlayer from "./components/BlockPlayer/BlockPlayer";
import { fetchOneSong, fetchSong } from "./http/songAPI";
import Approuter from "./components/Approuter";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [routes, setRoutes] = useState(['1', '2', '3', '4', '5'])
  useEffect(() => {
    if (isLoading) {
      const interBubble = document.querySelector('.interactive');
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 10;
        curY += (tgY - curY) / 10;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }
      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
      move()
    } 
  }, [])
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div class="interactive"></div>
      </div>
        
        <BrowserRouter>
          <Approuter />
        </BrowserRouter>
    </div>
  );
}

export default App;