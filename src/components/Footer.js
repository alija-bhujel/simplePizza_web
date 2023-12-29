import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <FaInstagram size='2em'/>
    <FaTwitter size='2em'/>
    <FaFacebook size='2em'/>
    <FaLinkedin size='2em'/>

    </div>
  
    <p>&copy; 2021 pedrotechpizza.com</p> 
    </div>
  )
}

export default Footer
