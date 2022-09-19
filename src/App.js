import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/countSlice";

function App() {
  const dispatch=useDispatch();
  let click=useSelector((state)=>state.count)

// eslint-disable-next-line no-undef
const [color, setColor] = useState("");
let [message, setmessage] = useState("")
const [position, setPosition] = useState(10);

const handlePositionColor=(e)=>{
  e.stopPropagation()
  dispatch(increment());
  const randomPositionGenerator=Math.floor(Math.random()*100)
      setPosition(randomPositionGenerator);

  const randomColorGenerator=Math.floor(Math.random()*16777215).toString(16);
  setColor(randomColorGenerator)
}
const handleReset=()=>{
  window.location.reload()
  setColor("white");
  setPosition(0)
}

const handleGameOver=(event)=>{
   let blankClick="GAME OVER";
    setmessage(blankClick)
 }


  return (
    < div style={{height:"100vh"}} onClick={click!==0 && handleGameOver}>
   {message.length >1 ? <h1>{message}</h1> :(  <div  className="App">
      <div onClick={handlePositionColor} className="box" style={{background:`#${color}`,position:"relative",left:`${2*position}px`,right:`${5*position}px`,top:`${5*position}px`,bottom:`${2*position}px`}}></div>
    <h1>{click}</h1>
    <h1 onClick={handleReset}>RESTART</h1>
    </div>)} 
  
    </div>
  );
}

export default App;
