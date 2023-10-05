import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <div>
    <div className='bodycon'>
    <div className='imagecon'>
        <img src="https://img.freepik.com/free-vector/flat-user-interface-concept-with-weather-widgets-web-elements-mobile-design_1284-45211.jpg?size=626&ext=jpg&ga=GA1.1.1411802109.1694714910&semt=ais" height="320px" width="320px"/>
    </div>
    <div className='rectcontact'>
    <div className='contactfull'>
       <form>
           <b><h2>Contact Us</h2></b>
           <input type="text" id="firstName" placeholder="First Name" required/>
           <input type="text" id="lastName" placeholder="Last Name" required/>
           <input type="email" id="email" placeholder="Email" required/>
           <input type="text" id="mobile" placeholder="Mobile Number" required/>
           <h4>Type Your Message Here...</h4>
           <textarea required></textarea>
           <input type="submit" value="send" id="contact_button"/>
       </form>
    </div>

    </div>
    </div>
    </div>
  )
}
