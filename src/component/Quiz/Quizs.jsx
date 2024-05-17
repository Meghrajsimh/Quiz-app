import React, { useRef, useState } from 'react'
import "./quiz.css";
import data from '../../assets/data'
const Quizs = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [stop, setStop] = useState(false);
  let [score, setScore] =  useState(0);
  let [result, setResult] =  useState(true);

  let Option1 =  useRef(null);
  let Option2 =  useRef(null);
  let Option3 =  useRef(null);
  let Option4 =  useRef(null);

  let optionArr = [Option1, Option2, Option3, Option4];

  const checkAns = (ele, ans) => {
    if(stop ===  false) {
    if(ans ===  question.ans) {
     ele.target.classList.add('correct');
     setScore(score + 1)
     setStop(true);
    }else {
      ele.target.classList.add('worng');
      setStop(true);
      optionArr[question.ans - 1].current.classList.add("correct");
    }
  }
  }

  const nextQue = () => {
     if( stop === true) {
       if(index === data.length - 1) {
        setResult(true);
        return 0;
       }
       setIndex(++index);
       setQuestion(data[index]);
       setStop(false);
       optionArr.map((option)=>{
        option.current.classList.remove('worng');
        option.current.classList.remove('correct');
        return null;
       })
     }
  }

  const startQuiz = () => {
    setResult(false);
  }
  return (
    <div className='container'>
        <h1>World Of Quiz</h1>
        <hr />
        {result ? <>
          <h2>Scored : {score}</h2>
          <button id='start' onClick={startQuiz}>Start Quiz</button>
        </> : 
        <>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(ele)=> checkAns(ele,1)}>{question.option1}</li>
            <li ref={Option2} onClick={(ele)=> checkAns(ele,2)}>{question.option2}</li>
            <li ref={Option3} onClick={(ele)=> checkAns(ele,3)}>{question.option3}</li>
            <li ref={Option4} onClick={(ele)=> checkAns(ele,4)}>{question.option4}</li>
        </ul>
        <button onClick={nextQue}>Next</button>
        <div className="index"> {index + 1} to {data.length} Quesition</div>
        </>}
    </div>
  )
}

export default Quizs