import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Home() {
    return (<div>
            <div className='hero'>
                <div className='detile'>
                    <h1>Hi ,I'M Lideya</h1>
                    <h2>A'M Web Developer</h2>
                    <p>I am a passionate web developer who builds fast, responsive, and usee-friendly websites and 
                        <br/>Moblie Apps.
                        <br />I enjoy turning ideas into real products using clean code and modern tech technologies.</p>
                    <h3 class="titleh3">What I focus on:</h3>
                    <ul>
                        <li>Clean UI & UX</li>
                        <li>Responsive design</li>
                        <li>Performance and accessibility</li>
                        <li>Continuous learning</li>
                    </ul>
                    <div className='contact-socail'>
                        <a className='contact-link' href='#contact'>Contact Me</a>
                        <div className='socal'>
                            <a href='#'><i class="fa-brands fa-github"></i></a>
                            <a href='#'><i class="fa-brands fa-square-instagram"></i></a>
                            <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className='continer-img' >
                    <img className='img' src="\photos\photo_2025-12-23_20-44-03.jpg" alt='my Pic' />
                </div>

            </div>





        </div>



    )
}