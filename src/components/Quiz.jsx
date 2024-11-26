import React from 'react'
import '../App.css'
import { qBank } from '../Data'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Quiz = () => {
    const [qid,setQid]=useState(0);
    const [score,setScore]=useState(0);
    const navigate=useNavigate();
    const option=document.getElementById('opt')
    function handleNext(){
        if(qid<(qBank.length-1)){
            setQid(qid+1)
        }
        if(qid==(qBank.length-1)){
            navigate('/score',{score: score})
        }
        
    }
    function handleOpt(){
        //  if(opt===ans){
            setScore(score+5)
        //  }
    }
  return (
    <div className='parent-container'>
        <div className='quiz'>
        <div className='contestant'>Contestant: {name}</div>
        <div className='timer'>{10}</div>
      <div className='quiz-container'>Question{qBank[qid].id}:{qBank[qid].ques} 
      <button className='opt'onClick={handleOpt}>{qBank[qid].opt1}</button>
      <button className='opt'onClick={handleOpt}>{qBank[qid].opt2}</button>
      <button className='opt'onClick={handleOpt}>{qBank[qid].opt3}</button>
      <button className='opt'onClick={handleOpt}>{qBank[qid].opt4}</button>
      <button className='next' onClick={handleNext}>Next Question</button>
      </div>
      </div>
    </div>
  )
}

export default Quiz
