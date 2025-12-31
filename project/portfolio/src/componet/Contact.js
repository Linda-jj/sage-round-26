import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Contact(){
return(<div>
<div className='footer' id='contact'>
<div className='footer-box1'>
<h2>Get in Touch</h2>
<p>Intersted inworking together or having aquestion ?</p>
<p>Feel free to reach out </p>
<p>I'm always open to new opportunities and collaborations.</p>
<p>Email:- lideyafff@gmail.com
</p>
<p>Phone #:- +251923-829008 </p>
</div>
<div className='footer-box2'>
<form>
    <label for='email'>Email</label>
    <input id='email' type='email'/>
    <label>Message</label>
< textarea cols={50} rows={10} className='footer-box3'></textarea>

</form>
<button className='contact-link'>Submit</button>
 <p className='date'>© {new Date().getFullYear()} My Portfolio L. All rights reserved.</p>
</div>
 <div >
   
    </div>   
</div>
  
</div>)}