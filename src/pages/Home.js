import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'  style ={{backgroundImage : `url(${BannerImage})`}}>
    <div className='HeaderContainer'>
    <h1>Pederro's Pizza</h1>
    <p>Pizza to fit my taste</p>
   <Link to ="/shop">
    <button>ORDER NOW</button>
   </Link>
    </div>
      
    </div>
  )
}

export default Home
