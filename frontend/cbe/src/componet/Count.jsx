import { useState, useEffect } from "react";


function Count(props){

 const[count2 ,setCount2]= useState(0)
 useEffect(()=>{
  console.log("use Effect from count comp")
 },[])
  return (<div className="colorFro">
   
    <h1 >{props.count1}</h1>
    <button  className="btn" onClick={()=>{
      props.setCount1(props.count1+1);
    }}>Add from count one</button>
   <h1 >{count2}</h1>
    <button className="btn1"  onClick={()=>{
      setCount2(count2+1);
    }}>Add from count two</button>

    <button className="btn" onClick={()=>{
      props.setCount1(props.count1-1);
    
    }}>Substract</button>
    <button className="btn"  onClick={()=>{
      props.setCount1(0)
    }}>Reset</button>

  </div>
  );
}
export default Count;