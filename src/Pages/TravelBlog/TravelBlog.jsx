import image1 from "../../../public/images/Rectangle 18.png"
import image2 from "../../../public/images/rectangle 19.jpg"
import image3 from "../../../public/images/rectangle 20.jpg"
import thumbnail from "../../../public/images/thumbnail 1.jpg"
import thumbnail1 from "../../../public/images/thumbnail2.jpg"
import thumbnail2 from "../../../public/images/thumbnail3.jpg"


const TravelBlog = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="font-bold text-3xl mt-10">Travel Blog</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
           
                {/*  1st card */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image1} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex gap-5">
        <h1 className="text-sm font-medium text-[#FFB700]">Work and Travel</h1>
        <p className="text-sm font-normal text-[#09182E]">16 septembar 23</p>
    </div>
    <h2 className="card-title">Embracing the Digital Nomad Lifestyle the Digital Nomad thr...</h2>
    <span className='w-[310px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-5'></span>
    <div className="flex mt-5">
      <img className="w-[40px] h-[40px] rounded-full" src={thumbnail} alt="" />
      <p className="text-sm font-medium mt-2 mx-2">Ys Stafen</p>
      <h1 className="text-base font-medium text-[#FFB700]">Read more...</h1>
    </div>
  </div>
           </div>
                {/*  2nd card */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image2} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex gap-5">
        <h1 className="text-sm font-medium text-[#FFB700]">Historical</h1>
        <p className="text-sm font-normal text-[#09182E]">14 septembar 23</p>
    </div>
    <h2 className="card-title">Historical Journeys: Stepping Back in Time Through Travel</h2>
    <span className='w-[310px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-5'></span>
    <div className="flex mt-5">
      <img className="w-[40px] h-[40px] rounded-full" src={thumbnail1} alt="" />
      <p className="text-sm font-medium mt-2 mx-2">Aria Montague</p>
      <h1 className="text-base font-medium text-[#FFB700]">Read more...</h1>
    </div>
  </div>
           </div>
                {/*  3rd card */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image3} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex gap-5">
        <h1 className="text-sm font-medium text-[#FFB700]">Sustainable Tourism</h1>
        <p className="text-sm font-normal text-[#09182E]">18 septembar 23</p>
    </div>
    <h2 className="card-title">Sustainable Tourism: Preserving the Planet While Seeing It All</h2>
    <span className='w-[310px] hidden md:block h-[1px] bg-slate-200 rounded-sm mb-4  mt-5'></span>
    <div className="flex mt-5">
      <img className="w-[40px] h-[40px] rounded-full" src={thumbnail2} alt="" />
      <p className="text-sm font-medium mt-2 mx-2">Elara Thorne</p>
      <h1 className="text-base font-medium text-[#FFB700]">Read more...</h1>
    </div>
  </div>
           </div>
            </div>
        </div>
    );
};

export default TravelBlog;