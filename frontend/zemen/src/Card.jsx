 export default function Card(props){
    return <  div style= {{'width':'300px','padding':'10px'}}>
        <div></div>
    <img style={{'width':'300px'}} src={props.img}/>
    <h1>{props.title}</h1>
    <p style={{'textAlign':'justify'}}>{props.description}</p>
    <a href="#">Read More</a>
    </div>
 }