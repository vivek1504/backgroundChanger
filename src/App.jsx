import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])

  return <div>
    <Buttons setColor={setColor}></Buttons>
  </div>
}
function Buttons({setColor}){
   return <div>
     <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
     <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>yellow</button>
     <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
     <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
     <button onClick={()=>{setColor("white")}}>White</button>
     <button style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}}>orange</button>
   </div>




}

export default App
