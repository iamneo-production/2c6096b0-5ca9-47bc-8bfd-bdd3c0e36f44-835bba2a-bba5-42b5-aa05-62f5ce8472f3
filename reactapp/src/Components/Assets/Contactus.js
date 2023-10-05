import React from 'react'
import './Contactus.css';
export default function Contactus() {
  return (
    <div>
    <div className='contactfull'>
       <form>
           <h1>Contact Us</h1>
           <input type="text" id="firstName" placeholder="First Name" required/>
           <input type="text" id="lastName" placeholder="Last Name" required/>
           <input type="email" id="email" placeholder="Email" required/>
           <input type="text" id="mobile" placeholder="Mobile Number" required/>
           <h4>Type Your Message Here...</h4>
           <textarea required></textarea>
           <input type="submit" value="send" id="contact_button"/>
       </form>
    </div>
    <div className="rectangle99">
    <img src="https://www.pngitem.com/pimgs/m/10-109046_call-icon-hd-png-download.png" height="400px" width="400px"/>
    </div>
</div>
)
}