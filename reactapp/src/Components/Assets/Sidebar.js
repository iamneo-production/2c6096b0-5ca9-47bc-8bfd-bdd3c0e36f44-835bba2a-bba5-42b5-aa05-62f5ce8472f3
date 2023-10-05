import React from 'react'
import * as VscIcons from "react-icons/vsc";
import * as TiIcons from "react-icons/ti";
import * as IoIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

import {Link} from "react-router-dom"

import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';

export default function Sidebar() {


  return (
    <div>
      <div className='full22'> 
           <div class="navbar">
              <div class="menu">
               <ul>
              
                  <li><Link to="/"><span className='icon'><AiIcons.AiOutlineHome/></span>&nbsp;&nbsp;HOME</Link></li>
                  <li><Link to="/login"><span className='icon'><AiIcons.AiOutlineUser/></span>&nbsp;&nbsp;LOGIN</Link></li>
                  <li><Link to="/reg"><span className='icon'><FaIcons.FaCashRegister/></span>&nbsp;&nbsp;REGISTER</Link></li>
                  <li><Link to="/login"><span className='icon'><BiIcons.BiLogIn/></span>&nbsp;&nbsp;LOGOUT</Link></li>
                </ul>
             </div>
          </div>
        
          
     
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>AccuWeather</h2>
            <ul>
            
              <li><Link to="/weather"><span className='icon'><TiIcons.TiWeatherPartlySunny/></span>MyWeather</Link></li>
              <li><Link to="/feed"><span className='icon'><VscIcons.VscFeedback/></span>Feedback</Link></li>
              <li><Link to="/faq"><span className='icon'><FaIcons.FaQuestionCircle/></span>FAQs</Link></li>
              <li><Link to="/contact"><span className='icon'><BiIcons.BiMessageDetail/></span>ContactUs</Link></li>
              <li><Link to="/about"><span className='icon'><IoIcons.IoInformationCircleSharp/></span>About Us</Link></li>
      
            </ul>
          </div>

      </div>

    </div>
)
}