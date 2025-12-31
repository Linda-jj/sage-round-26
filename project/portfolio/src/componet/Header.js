import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Header() {
    return (<div>
        <div className="home-page">
            <div className='header'>
                <div className='logo'>
                    <h2 >Portfolio L.</h2>
                </div>
                <div className='link' >
                    <a className='header-link' href='#'>Home</a>
                    <a className='header-link' href='#case'>Case Stubies</a>
                    <a className='header-link' href='#project'>Projects</a>
                    <a className='header-link' href='#'>Recent Work</a>
                    <a className='header-link' href='#contact'>Contact</a>
                </div>
                <i class="fa-sharp fa-solid fa-bars icons"></i>
            </div>
<div className='dropDown'>
    <a href=''>Home</a>
    <a href=''>Case Stubies</a>
    <a href=''>Projects</a>
    <a href=''>Contact</a>
    <i class="fa-sharp fa-solid fa-x icon"></i>
</div>
        </div>
    </div>


    )
}