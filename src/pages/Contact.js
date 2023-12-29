import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
    <div className='leftside'  style ={{backgroundImage : `url(${PizzaLeft})`}} ></div>
    <div className='rightside'>
    <h1>CONTACT US</h1>
    <form id="contact-form" method="POST">
      <label htmlFor='name'>Full Name</label>
      <input name="name" placeholder='Enter your full name' type='text'/>
      <label htmlFor='email'>Email</label>
      <input name="name" placeholder='Enter your email ' type='text'/>
      <label htmlFor='message'>Message</label>
      <textarea rows='6' placeholder='Enter message' name='message' required></textarea>
    </form>
    <button type='Submit'>Send message</button>
    </div>  
    </div>
  )
}

export default Contact
