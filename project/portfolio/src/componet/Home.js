import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Home(){
return(<div>
    <div className="home-page">
<div className='header'>
    <div className='logo'>
<h2 >Portfolio L.</h2>
</div>
<div className='link' >
<a className='header-link' href='#'>Home</a>
<a className='header-link' href='#'>Case Stubies</a>
<a className='header-link' href='#'>Projects</a>
<a className='header-link' href='#'>Recent Work</a>
<a className='header-link' href='#'>Contact</a>
</div>
</div>

<div className='hero'>
    <div className='detile'>
      <h1>Hi ,I'M Lideya</h1>
    <h2>A'M Web Developer</h2>
      <p>I am a passionate web developer who builds fast, responsive, and usee"-"friendly websites and Moblie Apps.
       <br/>I enjoy turning ideas into real products using clean code and modern tech technologies.</p>   
      <h3 class="titleh3">What I focus on:</h3>
            <ul>
                <li>Clean UI & UX</li>
                <li>Responsive design</li>
                <li>Performance and accessibility</li>
                <li>Continuous learning</li>
            </ul> 
            <div className='contact-socail'>
                <a className='contact-link' href='#'>Contact Me</a>
                <div className='socal'>
                <a href='#'><i class="fa-brands fa-github"></i></a>
                <a href='#'><i class="fa-brands fa-square-instagram"></i></a>
               <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>    
    </div>
    <div className='continer-img' >
<img className='img' src="photos/IMG_4943.JPG" alt='my Pic'/>
    </div>

</div>





</div>
    </div>
    

)
}