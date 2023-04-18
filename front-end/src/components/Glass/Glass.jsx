import React from 'react'
import './Glass.css'
import heart from '../../images/Group 2965.png';
import glass2 from '../../images/Glass2.jpg';
import glass1 from '../../images/Glass1.jpg';

const Glass = () => {
  return (
    <div className='container-1'>
      <div className='left-1'>
          <img src={heart} className='heart'></img>
          <img src={glass1} className='glass1'></img>
          <div className='round'>
           <p className='black'></p>
           <p className='white'></p>
           <p className='blue'></p>
           <p className='red'></p>
          </div>
          <div className='para-2'>
            <p>Tom Archer</p> 
            <p>DARWEN 1</p> 
            <p>$59.9</p> 
            <p>$39.99</p> 

          </div>
          <div className='btn-row-1'>
             <button className='btn-2'>View</button>
             <button className='btn-3'>Try At Home</button>
          </div>
         
          
      </div>
      <div className='right-1'>
      <img src={heart} className='heart'></img>
          <img src={glass2} className='glass2'></img>
          <div className='round'>
           <p className='black'></p>
           <p className='white'></p>
           <p className='blue'></p>
           <p className='red'></p>
          </div>
          <div className='para-2'>
            <p>Tom Archer</p> 
            <p>DARWEN 1</p> 
            <p>$59.9</p> 
            <p>$39.99</p> 

          </div>
          <div className='btn-row-1'>
             <button className='btn-2'>View</button>
             <button className='btn-3'>Try At Home</button>
          </div>
      </div>
    </div>
  )
}

export default Glass