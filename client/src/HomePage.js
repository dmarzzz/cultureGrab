import React from 'react';
import redBalloon from './static/red_balloon.png';
import blackBalloon1 from './static/black_balloon.png';
import blackBalloon2 from './static/black_balloon.png';
import girl from './static/girl.png';
import grab from './static/Grab_text.png';
import culture from './static/Culture_text.png';
import music from './static/music.png';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/blog" ><img src={redBalloon}  className="Homepage-redballoon" alt="redBalloon"  /> </a>
        <img src={blackBalloon1} className="Homepage-blackballoon1" alt="blackBalloon1" />
        <img src={blackBalloon2} className="Homepage-blackballoon2" alt="blackBalloon2" />
        <img src={girl} className="Homepage-girl" alt="girl" />
        <img src={grab} className="Culture-Text" alt="grab" />
        <img src={culture} className="Grab-Text " alt="culture" />
        <a href="/blog" ><img src={music} className="Music-Text " alt="culture" /></a>
      </header>
    </div>
  );
}

export default HomePage;
