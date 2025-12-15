

export default  function List(){
    let cars=["Toyota","BMW","Ford","ford"]
    return <div>
    <p>List of cars</p>
    <ul>
    {cars.map((car,index)=>{
        return <li key={index} >{car}</li>
    })}
    </ul>
    </div>
}