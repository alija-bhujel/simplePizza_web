import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
    <div className='aboutTop'  style ={{backgroundImage : 'url(${MultiplePizzas})'}}></div>
    <div className='aboutBottom'>
   <h1>ABOUT US</h1>
   <p>
   Describing pizza and the general appearance of a pizza,
    write the color of the toppings used, the size of the pizza, 
    the state of the pizza as it comes off the grill,
     the size of the pizza, and the cooking method.
      For example: Stone -oven fresh-baked pizza describes
       the appearance as fresh and the cooking method.
   </p>

    </div>
      
    </div>
  )
}

export default About
