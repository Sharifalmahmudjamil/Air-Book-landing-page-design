import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Banner = () => {
    return (
        <div className="">
             <h1 className=" absolute z-10 mt-24 mx-40 text-4xl font-bold text-blue-500"><span className="text-white">Welcome to</span> AirBook</h1>
            <div className="hero w-[1360px] h-[500px] relative" style={{backgroundImage: 'url(https://i.ibb.co/N1b9L29/banner.png)'}}>
       
  <div className="hero-overlay bg-opacity-60"></div>
 
  <div className="hero-content  text-neutral-content border lg:w-[1100px] bg-white">
  
    <div className=" border-none bg-white p-5  lg:w-[1000px]">

      <div className="flex justify-between">
        <div>
        <button className="btn  btn-sm bg-[#FFFFFF]"><FaRegCircle /> One Way</button>
      <button className="btn  btn-sm bg-blue-600 mx-3 text-white"><FaCircle />Round Trip</button>
        </div>
      
      <div >
      <button className="btn  btn-sm bg-gray-200 text-blue-600">1 Traveller <IoIosArrowDown /></button>
      <button className="btn  btn-sm bg-gray-200 mx-3 text-blue-600">Economy <IoIosArrowDown /></button>
      </div>
      
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-24 bg-white text-black text-center mt-4">
         <div className="w-[200px] h-[70px] border rounded-xl">
            <div className="flex gap-2">
            <h1 className="font-bold text-sm mt-6 ">DAC</h1>
            <span className='w-[80px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-8 rotate-90'></span>
            <h1 className="font-medium text-sm">Dhaka <br /> Hazrat Shahjalal International</h1>
            </div>
           
         </div>
         <div className="w-[200px] h-[70px] border rounded-xl">
            <div className="flex gap-2">
            <h1 className="font-bold text-sm mt-6">Cxb</h1>
            <span className='w-[80px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-8 rotate-90'></span>
            <h1 className="font-medium text-sm">Cox’s Bazar<br />Cox’s Bazar international</h1>
            </div>
           
         </div>
         <div className="w-[200px] h-[70px] border rounded-xl">
            <div className="flex gap-2">
            <h1 className="font-bold text-sm mt-6">03</h1>
            <span className='w-[50px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-8 rotate-90'></span>
            <h1 className="font-medium text-sm">october<br />tuesday, 2023</h1>
            </div>
           
         </div>
         <div className="w-[200px] h-[70px] border rounded-xl">
            <div className="flex gap-2">
            <h1 className="font-bold text-sm mt-6">05</h1>
            <span className='w-[50px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-8 rotate-90'></span>
            <h1 className="font-medium text-sm">october<br />tuesday, 2023</h1>
            </div>
           
         </div>

         <button className="btn btn-warning text-white "><FaSearch className="h-7 w-7"/></button>
      </div>
      
    </div>
  </div>
 
</div>
        </div>
    );
};

export default Banner;