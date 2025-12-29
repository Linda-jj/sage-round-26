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
            </div>

            


        </div>
    </div>


    )
}