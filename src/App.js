import React,{useState} from 'react'
import {FaEye,FaEyeSlash} from "react-icons/fa"

const App = () => {
  const [showPass ,setShowpass] = useState("false")
  return (
    <div>
      <div className="input-fields">
        <input type={
          showPass ? "password" : "text"
        } />
        <span onClick={()=>setShowpass(!showPass)}>{
          showPass ? <FaEye/> : <FaEyeSlash/>
        }</span>
      </div>
    </div>
  )
}

export default App