import React from 'react'
import './Banner.css'
import book from '../../images/Group 6248.png'
import pen from '../../images/Image 35.png'
import lens from '../../images/Image 39.png'
import {motion} from 'framer-motion';

const Banner = () => {

    const transition = {duration:2, type:'spring'}
    const transition1 = {duration:2, type:'spring', delay:1.5}
    const transition2 = {duration:2, type:'spring',delay:3}

  return (
    <div className='banner'>
        <div className='left'>
          <div className='name-1'>
            <p>Home Trail Cart 2.0</p>
           <p> It's An Experience! <br></br> 
           <motion.span
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration:1,delay:0.5}}
           >Four Frames.</motion.span> 
           
            <motion.span
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1,delay:2}}
            >Three Lenses.
            </motion.span> 
            
            <motion.span
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1,delay:3.5}}
            
            >1Laser</motion.span></p>

          </div>
          <div className='btn-row'>
           <button className='btn-1'>Try now</button>
           <i class="icon fa fa-play"></i>
           <p className='new'>Watch What's New</p>
          </div>
          
        </div>
        <div className='right'>
            <motion.img
            initial={{top:"-100%"}}
            whileInView={{top:"0%"}}
             transition={transition}
            src={lens}/>
           
            <motion.img 
            initial={{top:"90%", opacity:0}}
            whileInView={{top:"42%",
              left:"-23%",opacity:1}}

             transition={transition1}
            
            src={book} />

          
            <motion.img src={pen}
              initial={{left:"-100%", opacity:0}}
              whileInView={{ left:"-15%",
                top:"5%",opacity:1}}
  
               transition={transition2}
            
            />
        </div>
    </div>
  )
}

export default Banner