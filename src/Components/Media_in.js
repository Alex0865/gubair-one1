import Media from 'react-media';
import Signinlap from './Signinlap';
import Signinmob from './Signinmob';
import React from 'react'

function Media_in() {
  return (
    <div><Media query="(max-width:720px)">
    { matches=>{
        return matches?<Signinmob/>:<Signinlap/>
    }}
    </Media></div>
  )
}

export default Media_in
