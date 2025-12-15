import { useState } from "react";


function Count(){
 const[count ,setCount]= useState(0)
  return (<div>
   
    <h1 >{count}</h1>
    <button onClick={()=>{
      setCount(count+1);
      console.log(count)
    }}>Add</button>
    <button onClick={()=>{
      setCount(count-1);
      console.log(count)
    }}>Substract</button>
    <button onClick={()=>{
      setCount(0)
      console.log(count)
    }}>Reset</button>

  </div>
  );
}
export default Count;