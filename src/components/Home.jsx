import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    
  return (
    <div>
      <h1>ABES QUIZ PLATEFORM</h1>
      CONTESTENT NAME
      <input type="text" id="name"/>
      <button onClick={()=>{
        navigate('/quiz')
      }}>Start Quiz</button>
    </div>
  )
}

export default Home
