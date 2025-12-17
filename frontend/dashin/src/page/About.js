import {BrowserRouter,Routes,Route} from 'react-router-dom'
import{Link} from 'react-router-dom'


export default function Home(){
    return<div>
        <h1>About page</h1>
       <Link to='/' >Home page</Link>
    </div>
}