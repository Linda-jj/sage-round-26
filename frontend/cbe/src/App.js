import { useState } from "react";
import Count from "./componet/Count";
import Effect from "./componet/Effect";
import Form from "./componet/Form";
import If_else from "./componet/If_else";
import List from "./componet/List"


export default function App(){
const [count1,setCount1]=useState(0)

  let x=9;
  return(
    <div>
      <Count count1={count1} setCount1={setCount1}/>
      <If_else/>
      { x==10 && <h1>and opertor True</h1>}
      { x==10 ? <h1>ternary opertor True</h1> : <h1> ternary opertor  flase</h1>}
      <List count1={count1} setCount1={setCount1} />
     <Effect/>
     <Form/>

    </div>
  )
}