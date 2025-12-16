

export default  function List(props){
    let cars=["Toyota","BMW","Ford","ford"]
    return <div>
    <p className="title">List of cars</p>
    <ul className="listColor">
    {cars.map((car,index)=>{
        return <li key={index} >{car}</li>
    })}
    </ul>
    <button onClick={()=>{
props.setCount1(props.count1+1);
    }} >Change from list btn</button>
    </div>
}