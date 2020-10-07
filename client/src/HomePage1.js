import React from 'react';
import redBalloon from './static/red_balloon.png';
import blackBalloon1 from './static/black_balloon.png';
import blackBalloon2 from './static/black_balloon.png';
import girl from './static/girl.png';
import grab from './static/Grab_text.png';
import culture from './static/Culture_text.png';
import music from './static/music.png';
import './App1.css';

function HomePage1() {
  return (
    <div className="homepage-container">
        <a href="/blog" className="Homepage-music-balloon">
          <img src={redBalloon} alt="redBalloon" className="balloon"  />
        </a>
        <a href="/blog" className="Homepage-art-balloon">
          <img src={blackBalloon1} className="balloon" alt="blackBalloon1" />
        </a>
        <a href="/blog" className="Homepage-film-balloon">
          <img src={blackBalloon2} className="balloon" alt="blackBalloon2" />
        </a>
        <img src={girl} className="Homepage-girl" alt="girl" />
        <img src={grab} className="Culture-Text" alt="grab" />
        <img src={culture} className="Grab-Text " alt="culture" />
    </div>
  );
}

export default HomePage1;