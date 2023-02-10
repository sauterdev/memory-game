import { useState, useEffect } from "react";
import "./style.css";

function RandNumAndPlayInput(props) {
  const [randNum, setRandNum] = useState("");
  const [numLength, setNumLength] = useState(5); //starts at 5 for the genRandNum substring method
  const [guess, setGuess] = useState("");
  const [level, setLevel] = useState(1);
  const [stage, setStage] = useState(1);
  const [wrong, setWrong] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  //creates a random number to display on the screen for 1 seconds, then hides the displayed number
  function genRandNum(numLength) {
    const hideNumber = document.getElementById("timedDisplay");
    hideNumber.style.display = "block";
    setRandNum(("" + Math.random()).substring(2, `${numLength}`));
    setTimeout(() => {
      hideNumber.style.display = "none";
    }, 1000);
  }
  //increases level after stage 5, increase length of random number.
  function increaseDifficulty() {
    if (stage == 5) {
      setLevel(() => level + 1);
      setStage(() => 0);
      setNumLength(() => numLength + 1);
    } else {
      setStage(() => stage + 1);
    }
  }

  //increases wrong and checks if you have hit 3 wrongs. 3 resets game.
  function checkLossReset() {
    setWrong((prevWrong) => {
        console.log(prevWrong)
      if (prevWrong >= 2) {
        setNumLength(() => 5);
        setLevel(() => 1);
        setStage(() => 1);
        setCurrentStreak(() => 0);
        return 0;
      } else {
        setCurrentStreak(0);
        return prevWrong + 1;
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess == randNum) {
      console.log(`Winner`);
      increaseDifficulty();
      setCurrentStreak(() => currentStreak + 1);
      //checks if longest streak needs to be updated or kept the same
      setLongestStreak(() => {
          console.log(currentStreak)
          if (currentStreak >= longestStreak) {
            return currentStreak + 1;
          }
          else {
            return longestStreak
          }
        })
    }   else {
      console.log(`loser`);
      checkLossReset();
    }
    genRandNum(numLength);
    setGuess(() => "");
  }

  useEffect(() => {
    genRandNum(numLength);
  }, []);

  return (
    <div className="total-content">
      <div>
        <h2>
          Level {level}-{stage}
        </h2>
        <h2>Longest Streak: {longestStreak}</h2>
        <h2>Current Streak: {currentStreak}</h2>
        <h2>Wrong {wrong}/3</h2>
      </div>
      <hr></hr>
      <div className="hideNumDiv">
        <h1 id="timedDisplay">{randNum}</h1>
      </div>
      <hr></hr>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="guess">Number is:</label>
          <input
            type="text"
            name="guess"
            id="guess"
            value={guess}
            onChange={(event) => {
              setGuess(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default RandNumAndPlayInput;
