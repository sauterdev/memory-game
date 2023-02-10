import { useState, useEffect } from 'react';
// import LevelScoreStreak from "./components/levelScoreStreak"
// import NumAndInput from './components/numAndInput';
import HeaderComp from "./components/headerComp"
import './App.css';

import RandNumAndPlayInput from './components/randNumAndPlayInput';

export default function App() {
 
  return (
       <div className="total-content">
         <hr></hr>
          <HeaderComp />
         <hr></hr>
      <RandNumAndPlayInput />
      </div>
    
  );
}
