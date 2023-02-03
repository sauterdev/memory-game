import { useState, useEffect } from 'react';
import LevelScoreStreak from "./components/levelScoreStreak"
import './App.css';

import RandNumAndPlayInput from './components/randNumAndPlayInput';

function App(props) {
  return (
    
      <div className="total-content">
        <hr></hr>
        <h1>Speed Memory</h1>
        <h2>Type the numeric code you see appear on the screen</h2>
        <h3>The longer you go, the harder it gets</h3>
        <h3>Good Luck!</h3>
        <hr></hr>
      {/* <LevelScoreStreak /> */}
      <RandNumAndPlayInput />
      </div>
    
  );
}

export default App;
