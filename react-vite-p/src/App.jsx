import React from "react";
import { useState } from "react";



function App(){

  const [likes , setlikes] = useState(0);

  function increase(){
    setlikes(likes+1)
    console.log(likes)
  }
  return(
    <div> 
    <h1>likes: {likes}</h1> 
<button onClick={increase}> h </button>

    </div>
    
  )
}
export default App
