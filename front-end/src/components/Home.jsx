import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import './Home.css'
import Slider from './Slider/Slider'
import Glass from './Glass/Glass'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className='para-1'>
          <h1>4 frames, 3 lenses, 7 days - direct to your home. </h1>
          <p>We get it - sometimes you need to hold the glasses in your hand (or take a selfie wearing them) to know if they’re made for you   <br></br>
          or not. With our Free Home Trial, get 4 frames of your choice at your home, along with 3 cool lenses.</p>
     </div>
      <Slider />
      <Glass />
    </div>
  )
}

export default Home