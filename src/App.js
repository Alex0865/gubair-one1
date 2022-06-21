

import "./App.css";
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Welcome from './Components/Welcome';
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Media_in from "./Components/Media_in";
import Media_up from "./Components/Media_up";


function App() {
  return (
    <div>
<Router>
        <Routes>
          <Route path='/' element={<Media_in />}/>
          <Route path='/signup' element={<Media_up />}/>
          <Route path='/welcome' element={<Welcome />}/>
        </Routes>
 </Router>
 
 
    </div>
  )
}

export default App