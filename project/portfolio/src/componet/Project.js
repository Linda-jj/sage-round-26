import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Project(){
return(<div>
<div className='Project-box'>
    <h2>Projects</h2>
<div className='projectOne'>
    
    <div>
    <h3>Presonal Portfolio</h3>
    <p>building my own Portfolio by using React</p>
</div>

<img src='photos/que-es-un-portfolio-1026x1026.png' alt='My Portfolio'/>

</div>
<div className='projectTwo'>
     <div>
        <img src='photos/exploring-javascript-the-backbone-of-modern-web-development.png'/>
    </div>
    <div>
        <h3>Responsive website</h3>
<p> Simple task manager 
    using javascript and local Storage</p>
    </div>
    </div>
   <div className='projectThree'>
<div>
    <h3>E-commirtional</h3>
<p>Amoder E-commertional website with
    menu and contact section.
</p>
</div>
<div>
    <img src='photos/images.png' alt='e-commer'/>
</div>
   </div>


</div>


</div>)}