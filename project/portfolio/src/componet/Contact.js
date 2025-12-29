import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Contact(){
return(<div>
<div className='footer'>
<div className='footer-box1'>
<h2>Get in Touch</h2>
<p>Intersted inworking together or having aquestion ?</p>
<p>Feel free to reach out </p>
<p>I'm always open to new opportunities and collaborations.</p>
<p>Email: lideyafff@gmail.com
</p>
<p>Phone #:- </p>
</div>
<div className='footer-box2'>
<form>
    <label for='email'>Email</label>
    <input id='email' type='email'/>
    <label>Message</label>
<textarea cols={30} rows={10}></textarea>
</form>
</div>
</div>
</div>)}