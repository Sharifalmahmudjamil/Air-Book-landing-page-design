import imag1 from "../../../public/images/card-image1.jpg"
import imag2 from "../../../public/images/card-image2.jpg"
import imag3 from "../../../public/images/card-image3.jpg"

const Featured = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <h1 className="text-3xl font-bold">Featured Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {/* 1st card */}
            <div className="card w-96 bg-base-100 shadow-xl">
     <figure><img src={imag1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-warning rounded-full btn-wide text-base font-semibold">View More</button>
    </div>
  </div>
    </div>
    {/* 2nd card */}
            <div className="card w-96 bg-base-100 shadow-xl">
     <figure><img src={imag2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
 
    <div className="card-actions justify-center">
    <button className="btn btn-warning rounded-full btn-wide text-base font-semibold">View More</button>
    </div>
  </div>
    </div>
    {/* 3rd card */}
            <div className="card w-96 bg-base-100 shadow-xl">
     <figure><img className="h-[260px]" src={imag3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">the best of Abu Dhabi with exclusive Etihad Airways!</h2>
    <div className="card-actions justify-center">
    <button className="btn btn-warning rounded-full btn-wide text-base font-semibold">View More</button>
    </div>
  </div>
    </div>
            </div>
        </div>
    );
};

export default Featured;