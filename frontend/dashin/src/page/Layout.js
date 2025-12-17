import{Link, Outlet} from 'react-router-dom'


export default function Layout(){

    return<div className='list'>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/products">Products Page</Link>
<Outlet/>
<h2>This is the footer page</h2>
    </div>
}