import React, {useState} from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
function Register() {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[location,setLocation]=useState("");
    const [error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHolder=(event)=>
  {
    if(firstname.length==0 && lastname.length==0)
    {
      alert("Please fill the fields")
    }
    else if(email.length===0)
    {
      alert("Enter Emailid")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else
    {
      navigate("/")
    }
  }
    
  return (
    <div className='rect1'>
    <div className='img1'>
        <img src="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w05315-small.jpg" height="700px" width="1280px"/>
        <div className='rect2'>
      <div className='h1'>
      <p>REGISTRATION</p>
      </div>
      <div className='form1'>
      <form onSubmit={formHolder}>
      <input type="text100" value={firstname} placeholder="Enter Firstname" onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>

      <input type="text300" value={lastname} placeholder="Enter Lastname" onChange={(e)=>setLastname(e.target.value)}/><br/><br/>

      <input type="text400" value={username} placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>

      <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
     
      <input type="password" value={password} placeholder="Enter Passsword" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <input type="text500" value={location} placeholder="Enter Location" onChange={(e)=>setLocation(e.target.value)}/><br/><br/>
      <button type="submit" class="but2">REGISTER</button>

      </form>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Register
