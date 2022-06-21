import React from 'react';
import Signuplap from './Signuplap';
import Signupmob from './Signupmob';
import Media from 'react-media';

function Media_up() {
  return (
    <div><Media query="(max-width:720px)">
    { matches=>{
        return matches?<Signupmob/>:<Signuplap/>
    }}
    </Media>
    </div>
  )
}

export default Media_up