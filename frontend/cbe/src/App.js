import Count from "./componet/Count";
import If_else from "./componet/If_else";
import List from "./componet/List"


export default function App(){
  let x=9;
  return(
    <div>
      <Count/>
      <If_else/>
      { x==10 && <h1>and opertor True</h1>}
      { x==10 ? <h1>ternary opertor True</h1> : <h1> ternary opertor  flase</h1>}
      <List/>

    </div>
  )
}