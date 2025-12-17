import {BrowserRouter,Routes,Route} from 'react-router-dom'
import{Link} from 'react-router-dom'


export default function Products(){
    return<div>
        <h1>Products page</h1>
        <ul>
            <li><Link>Apple</Link></li>
             <li><Link>Banana</Link></li>
              <li><Link>Orange</Link></li>
               <li><Link>car</Link></li>
       


            
        </ul>
        <Link to="/about">About Page</Link>
    </div>
}