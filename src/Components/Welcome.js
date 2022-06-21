import React from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (


    <div className='well'>
       
        <div><img src='Welcomeyellow.gif' className='welcome'></img></div>
       <div> <button className='but' onClick={ () => {navigate('/')}}>Sign Out</button></div>
        
    </div>
  )
}

export default Welcome