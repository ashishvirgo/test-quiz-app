import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const cname=document.getElementById('name');
  return (
    <div className='home-container'>
      <h1>ABES QUIZ PLATEFORM</h1>
      <div className='start'>CONTESTENT NAME
      <input type="text" id="name"/>
        </div>
        <div><button onClick={(cname)=>{
        navigate('/quiz')
      }}>Start Quiz</button></div>
      
    </div>
  )
}

export default Home
