import React from 'react'
import './Footer.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';

//import * as AiIcons from "react-icons/ai";
export default function Footer() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    <div className="body67">
    <div className="image">
    <img src="https://designshack.net/wp-content/uploads/weatherstack-1.jpg" height="300px" width="450px"/>
    </div>
    <div className="para">
    <p><b>REAL-TIME & ACCURATE<br></br>WEATHER DATA -</b></p>
    </div>
    <div className='para2'>
      <b><p>Retrieve instant, accurate weather <br></br>information for any location</p></b>
    </div>
    <div className='image2'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO7AOIB5dtNpJrRVUB85D_Y5Lq1c6HGgwKg&usqp=CAU" height="50px" width="200px"/>
      </div>
      <div className='para3'>
      <Link style={{textDecoration:"none", color:"white"}} to="/reg"><b><p>Start Using This App</p></b></Link>
    <div style={{color:'black',float:'left',marginTop:'-300px', fontFamily:'fantasy',fontSize:'30px',color:'white'}}>Welcome,{username}</div>
     </div>
     
    
    <div className="Footer">

    <div className="row">
    
    <div className="col-md-6 col-lg-5 col-12 ft-1">
       <b><h3 className='ap'>ACCUWEATHER</h3></b> 
       <div className="footer-icons ">
       <Link to='https://www.facebook.com/'><span ><AiIcons.AiFillFacebook/></span></Link>
        <Link to='https://www.twitter.com/'><span ><BsIcons.BsTwitter/></span></Link>
        <Link to='https://www.instagram.com/'><span ><BsIcons.BsInstagram/></span></Link>
        <Link to='https://www.linkedin.com/in/krithika-m-431104227/'><span ><AiIcons.AiOutlineLinkedin/></span></Link>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <Link to="/"><p><i class="fa-solid fa-phone-volume"></i>HOME</p></Link>
    <Link to="/login"><p><i class="fa-solid fa-envelope"></i>LOGIN</p></Link>
    <Link to="/reg"><p><i class="fa-sharp fa-solid fa-paper-plane"></i>REGISTER</p></Link>
    <Link to="/login"><p><i class="fa-sharp fa-solid fa-paper-plane"></i>LOGOUT</p></Link>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>DOCS & HELP</h4>
     <Link to="/privacy"><p><i class="fa-solid fa-phone-volume"></i>PRIVACY & POLICY</p></Link>
     <Link to="/terms"><p><i class="fa-solid fa-envelope"></i>TERMS & CONDITION</p></Link>
     <Link to="/about"><p><i class="fa-solid fa-envelope"></i>ABOUT US</p></Link>
    </div>
    <div className="col-md-6 col-lg-2 col-12 ft-4">
     <h6>GET IN TOUCH</h6>
     <Link to="/Faq"><p><i class="fa-solid fa-envelope"></i>FAQs</p></Link>
     <Link to="/feed"><p><i class="fa-solid fa-phone-volume"></i>FEEDBACK</p></Link>
     <Link to="/contact"><p><i class="fa-solid fa-phone-volume"></i>CONTACT US</p></Link>
     
    </div>
    <div className="col-md-6 col-lg-1 col-12 ft-5">
     <h1> CONTACT INFO</h1>
     <p><i class="fa-solid fa-phone-volume"></i>+91 9495408971</p>
     <p><i class="fa-solid fa-envelope"></i>accuweather@gmail.com</p>
     <p><i class="fa-solid fa-envelope"></i>Coimbatore,Tamilnadu,India</p>
    </div>
    
    </div>
    </div>
   
</div>
<Sidebar/>
    </div>

  )
}

