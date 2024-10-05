import React from 'react'
import './Footer.css'
import { FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaPaypal } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcApplePay } from 'react-icons/fa'
import { FaGooglePay } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-top">
    <div className="newsletter">
      <p>BE THE FIRST TO KNOW</p>
      <p>Sign up for updates from metta muse.</p><br></br>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>

    <div className="contact-info">
      <p>CONTACT US</p>
      <p>+44 221 133 5360</p>
      <p><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></p>
      <p>CURRENCY</p>
      <p>USD</p>
      <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
    </div>
  </div>
  <hr></hr>

  <div className="footer-middle">
    <div className="footer-links">
      <h3>mettā muse</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Artisans</a></li>
        <li><a href="#">Boutiques</a></li>
      </ul>
    </div>

    <div className="quick-links">
      <h3>QUICK LINKS</h3>
      <ul>
        <li><a href="#">Orders & Shipping</a></li>
        <li><a href="#">Join/Login as a Seller</a></li>
        <li><a href="#">Payment & Pricing</a></li>
        <li><a href="#">Return & Refunds</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>

    <div className="follow-us">
      <h3>FOLLOW US</h3>
      <div className="social-icons">
       <FaInstagram size={30} color="white" />
       <BsLinkedin size={30} color="white"/>
      </div>
      <div className="payment-icons">
        <p>Metta musce Accepts</p>
       <FaPaypal size={30} color="white"/>
       <FaCcMastercard size ={30} color="white"/>
       <FaCcApplePay size={30} color="white"/>
       <FaGooglePay size={30} color="white"/>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>Copyright © 2023 mettā muse. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer;


