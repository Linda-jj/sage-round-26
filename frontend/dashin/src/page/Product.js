

import{useParams} from 'react-router-dom'


export default function Product(){
    const {item}=useParams()
    return<div>
        <h1>Buy{item}</h1>
          
    </div>
}