import React from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
<div className='well'>


    <header> <h1 >Welcome</h1></header>
       <h3 style={{textAlignment:"left"}}>Hello User,</h3>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       
       
       

     <footer> <button className='but' onClick={ () => {navigate('/')}}>Sign Out</button></footer>
      </div >
    


  )
}

export default Welcome