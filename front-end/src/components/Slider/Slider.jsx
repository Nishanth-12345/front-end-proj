import React from 'react'
import './Slider.css';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css';
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
const Slider = () => {
  return (
   <section className='container'>
    
    <div className='testimonial'>
    <h1>Google & FB Reviews</h1>
    <Swiper
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              slidesPerview={1}
              navigation
              pagination={{clickable:true}}
              
        
              
              spaceBetween={30}
              
            
    >
       <div className='testcontent'>
       
          
             

            

            <SwiperSlide>
             <div className='slide'>
            <div className='img'>

            </div>
             
             <img src={img1} className='image'></img>
             
             <p>Alexendraa</p>
            <div className='icon-star'>

            
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
            </div>
             <p>Fantastic company! I discovered them while searching for home trial glassses on Google and I’m so glad I did! Excellent
customer service, super fast and efficient! The website is very easy to use and very user friendly. While ordony glasses, I had
some technical problems which were resolved within seconds by chat. The glasses arrived 2 days after ordering and came in
a lovely box (looked a little bit like an iPhone box ;) , together with an adjustment took and cleaning spray. The company
certainly deserves the award that they recently received!</p>
             </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='slide'>
        
             <img src={img2} className='image'></img>
             <p>Andria</p>
            <div className='icon-star'>

            
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
            </div>
             <p>Fantastic company! I discovered them while searching for home trial glassses on Google and I’m so glad I did! Excellent
customer service, super fast and efficient! The website is very easy to use and very user friendly. While ordony glasses, I had
some technical problems which were resolved within seconds by chat. The glasses arrived 2 days after ordering and came in
a lovely box (looked a little bit like an iPhone box ;) , together with an adjustment took and cleaning spray. The company
certainly deserves the award that they recently received!</p>
              </div>
            </SwiperSlide>
              <SwiperSlide>
              <div className='slide'>
        
             <img src={img3} className='image'></img>
             <p>jon sough</p>
            <div className='icon-star'>

            
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
             <i class="fa fa-star star" aria-hidden="true"></i>
            </div>
             <p>Fantastic company! I discovered them while searching for home trial glassses on Google and I’m so glad I did! Excellent
customer service, super fast and efficient! The website is very easy to use and very user friendly. While ordony glasses, I had
some technical problems which were resolved within seconds by chat. The glasses arrived 2 days after ordering and came in
a lovely box (looked a little bit like an iPhone box ;) , together with an adjustment took and cleaning spray. The company
certainly deserves the award that they recently received!</p>
              </div>
            </SwiperSlide>
             
             
        
       </div>
       
       </Swiper>
      {/* <div className='button-next-slide nav-n'>
               
               <MdKeyboardArrowLeft/>
             </div>
             <div className='button-prev-slide nav-p'>
             <MdKeyboardArrowRight/>
            </div>*/}
    </div>
    
   </section>
   
  )
}

export default Slider