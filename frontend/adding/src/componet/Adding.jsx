import { useState } from "react"


export default function Adding() {
const [num1,setNum1] =useState(0);
const [num2,setNum2] =useState(0);
const [count, setCount]=useState(0);


const sum =()=>{
setCount= (Number(num1)+ Number(num2));
}




    return<>
    <form>
        <label for="num1">Number 1:</label>
        <input
        id="num1"
        type="text"
        
        placeholder="Please Enter your first Number"
         onChange={(e) => setNum1(e.target.value)}
        />

        <label for="num2">Number 2:</label>
        <input
        
        id="num2"
        type="text"
        placeholder="Please Enter your second Number"
         onChange={(e) => setNum2(e.target.value)}
        />
    </form>
    <button onClick={()=>{setCount(count)}}
 

    >Adding</button>
    <h1> The Numbers Your addind is :{sum}</h1>

    
    </>
}