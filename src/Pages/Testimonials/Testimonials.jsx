/* eslint-disable react/no-unescaped-entities */
import testimonials from '../../../public/images/testimonials.jpg'

import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  
    return (
        <div className="">
             <h1 className="font-bold text-3xl mt-10 max-w-screen-xl mx-auto">Testimonials</h1>
             <div className="max-w-screen-2xl relative border h-[400px] bg-[#006CE4] mt-10">

              <div className='absolute border w-[150px] h-[250px] mt-24 mx-5 bg-cover' style={{backgroundImage: 'url(https://i.ibb.co/mTkPzsc/thumbnail2.jpg)'}}> 
              <div className="hero-overlay bg-opacity-85"></div>

               </div>


              <div className='absolute border w-[150px] h-[250px] mt-24 mx-[1130px]  bg-cover' style={{backgroundImage: 'url(https://i.ibb.co/cXYShSr/Rectangle-33.png)'}}> 
              <div className="hero-overlay bg-opacity-85"></div>

               </div>


             <FaArrowLeft  className='text-3xl absolute mt-52 mx-28 text-white'/>
             <FaArrowRight  className='text-3xl absolute mt-52 mx-[1130px] z-10 text-white'/>
             <div className="card absolute card-side w-[900px] bg-base-100 shadow-xl mx-48 mt-20 ">
            
  <figure><img className='w-[200px] h-[280px]' src={testimonials} alt="Movie"/></figure>
  <div className="card-body">
    
    <p className='text-lg font-normal text-center'>"Unforgettable journeys with John and Sarah! Their <br /> travel expertise turned our dreams into reality. Can't <br /> wait to explore with them again!"</p>
    <h1 className='text-xl font-bold text-center'>Emily</h1>
    <p className='font-medium text-base text-center'>Adventure Enthusiast</p>
    
    <div className="rating justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    
  </div>
</div>








             </div>
        </div>
    );
};

export default Testimonials;