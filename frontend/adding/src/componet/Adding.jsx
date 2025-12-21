import { useState, useRef,useEffect} from "react"


export default function Adding() {
const [num1,setNum1] =useState(0);
const [num2,setNum2] =useState(0);
const [count, setCount]=useState(0);
const render=useRef(0)


const sum =()=>{
setCount(Number(num1)+ Number(num2));
}
 const sub=()=>{
    setCount(Number(num1)-(num2));
 }
 const mul=()=>{
    setCount(Number(num1)* Number(num2))
 }
 const div=()=>{
    setCount(Number(num1)/Number(num2))
 }
//  const modu=()=>{
//     setCount(Number(num1)%Number(num2))
//  } 
 

useEffect(()=>{
    render.current++;
})


    return< div className="cal">
    <form>
        <label className="title"
        for="num1">Number 1:</label>
        <input className="title-box"
        id="num1"
        type="text"
        
        placeholder="Enter your first Number"
         onChange={(e) => setNum1(e.target.value)}
        />

        <label className="title"
         for="num2">Number 2:</label>
        <input className="title-box"
        
        id="num2"
        type="text"
        placeholder="Enter your second Number"
         onChange={(e) => setNum2(e.target.value)}
        />
        <div className="btnn1">
  <div className="btnnn">
  <input type="button" value='+' onClick={sum}/>
  <input type="button" value='-' onClick={sub}/>
  <input type="button" value='*' onClick={ mul}/>
  <input type="button" value='/' onClick={div}/>
</div>
 <div className="btnnn">
  <input type="button" value='%' />
  <input type="button" value='AC' onClick={setCount('')}/>

</div>
</div>
    </form>


    <h1> The Numbers Your adding is :{count}</h1>
    <h2> Render No:{render.current} </h2>

    </div>
    
    

    };









    