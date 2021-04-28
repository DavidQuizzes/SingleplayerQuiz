import React, { useState, useEffect } from 'react';

function App() {
  const [display, setDisplay] = useState(<h1>Please wait</h1>)
  let question1 = {
    questionJSX: <><h1>What is 1+1?</h1><br /><h2>A: 1</h2><h2>B: 2</h2><h2>C: 3</h2><h2>D: 4</h2></>,
    correct: 2
  }
  let question2 = {
    questionJSX: <><h1>What is 1+2?</h1><br /><h2>A: 1</h2><h2>B: 2</h2><h2>C: 3</h2><h2>D: 4</h2></>,
    correct: 3
  }
  let question3 = {
    questionJSX: <><h1>What is 2+2?</h1><br /><h2>A: 1</h2><h2>B: 2</h2><h2>C: 3</h2><h2>D: 4</h2></>,
    correct: 4
  }
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [done, setDone] = useState(0)
  const [misses, setMisses] = useState(0)
  let questions = [question1, question2, question3]
   useEffect(() => {
    setDisplay(questions[currentQuestion].questionJSX)
  }, [])
  function answer(btnNum) {
    switch (btnNum) {
      case 1:
        if (questions[currentQuestion].correct === 1) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setDone(1)
            setDisplay(<><h1>Correct!</h1><h2>Click Next to continue</h2></>)
          } else {
            setDisplay(<><h1>Thanks for playing!</h1><h2>You had {misses} misses.</h2><a href="https://davidquizzes.github.io">Go to the home page for more quizzes</a></>)
            setDone(2)
          }
        } else {
          setDisplay(<><h1>Incorrect! Try again:</h1>{questions[currentQuestion].questionJSX}</>)
          setMisses(misses + 1)
        }
        break;
      case 2:
        if (questions[currentQuestion].correct === 2) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setDone(1)
            setDisplay(<><h1>Correct!</h1><h2>Click Next to continue</h2></>)
          } else {
            setDisplay(<><h1>Thanks for playing!</h1><h2>You had {misses} misses.</h2><a href="https://davidquizzes.github.io">Go to the home page for more quizzes</a></>)
            setDone(2)
          }
        } else {
          setDisplay(<><h1>Incorrect! Try again:</h1>{questions[currentQuestion].questionJSX}</>)
          setMisses(misses + 1)
        }
        break;
      case 3:
        if (questions[currentQuestion].correct === 3) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setDone(1)
            setDisplay(<><h1>Correct!</h1><h2>Click Next to continue</h2></>)
          } else {
            setDisplay(<><h1>Thanks for playing!</h1><h2>You had {misses} misses.</h2><a href="https://davidquizzes.github.io">Go to the home page for more quizzes</a></>)
            setDone(2)
          }
        } else {
          setDisplay(<><h1>Incorrect! Try again:</h1>{questions[currentQuestion].questionJSX}</>)
          setMisses(misses + 1)
        }
        break;
      case 4:
        if (questions[currentQuestion].correct === 4) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setDone(1)
            setDisplay(<><h1>Correct!</h1><h2>Click Next to continue</h2></>)
          } else {
            setDisplay(<><h1>Thanks for playing!</h1><h2>You had {misses} misses.</h2><a href="https://davidquizzes.github.io">Go to the home page for more quizzes</a></>)
            setDone(2)
          }
        } else {
          setDisplay(<><h1>Incorrect! Try again:</h1>{questions[currentQuestion].questionJSX}</>)
          setMisses(misses + 1)
        }
        break;
      default:
        alert("You found a bug!")
    }
  }
  function next() {
    setDisplay(questions[currentQuestion].questionJSX)
    setDone(0)
  }
  function restart() {
    setCurrentQuestion(0)
    setDisplay(<><h2>Click the button when you're ready!</h2></>)
    setDone(3)
    setMisses(0)
  }
  function first() {
    setDisplay(questions[currentQuestion].questionJSX)
    setDone(0)
  }
  return (
    <>
      <div className="content">
        <h1>D! | DSQ</h1>
        <h2>David's Single-player Quiz</h2>
        <h3>Inspired by Kahoot!</h3>
        {display}<br />
      </div>
      <div className="bottombar">
        <Buttons answerFunc={answer} nextFunc={next} restartFunc={restart} firstFunc={first} doneVar={done} /><br /><br />
        <span>Kahoot! is a trademark of Kahoot! AS.</span>
      </div>
    </>
  );
}

function Buttons(props) {
  if ( props.doneVar === 0 ) {
    return (
      <>
        <button onClick={() => props.answerFunc(1)}>A</button>
        <button onClick={() => props.answerFunc(2)}>B</button>
        <button onClick={() => props.answerFunc(3)}>C</button>
        <button onClick={() => props.answerFunc(4)}>D</button>
      </>
    )
  } else if (props.doneVar === 1) {
    return (
      <>
        <button onClick={() => props.nextFunc()}>Next</button>
      </>
    )
  } else if (props.doneVar === 2) {
    return (
      <>
        <button onClick={() => props.restartFunc()}>Restart</button>
      </>
    )
  } else if (props.doneVar === 3) {
    return (
      <>
        <button onClick={() => props.firstFunc()}>I'm ready</button>
      </>
    )
  }
}

export default App;
