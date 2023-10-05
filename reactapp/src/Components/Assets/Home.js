import React from 'react'
import "./Home.css";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Home() {


  
  return (
    <div className="body67">
  
      <div className="Footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <p><span>WEATHER LIVE!</span></p>


              <div className="footer-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-square-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>

            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">Register</a>
                </li>


                <li className="nav-item">
                  <a className="" href="/">Log Out</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h4>Contact Info</h4>
              <p><i class="fa-solid fa-phone-volume"></i> 9944005687</p>
              <p><i class="fa-solid fa-envelope"></i>weather_live@gmail.com</p>
              <p><i class="fa-sharp fa-solid fa-paper-plane"></i>TamilNadu,INDIA</p>
            </div>
          </div>
        </div>
        <div className="Last-footer">
          <p>Design By  Team Weather Live</p>
        </div>
      </div>

</div>
)
}