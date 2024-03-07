import offers1 from "../../../public/images/offers1.png"
import offers2 from "../../../public/images/offers2.png"
import offers3 from "../../../public/images/offers3.png"

const OffersSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold mt-10">Deals and Offers</h1>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
                {/* 1st card */}
            <div className="card card-side  bg-base-100 shadow-xl">
  <figure><img src={offers1} alt="Movie"/></figure>
  <div className="card-body text-center mt-10">
    <h2 className="text-xs font-medium">With bkash payment only</h2>
    <p className="text-base font-semibold text-[#006CE4]">up to 14% discount on the base fare of domestic flights</p>
  
  </div>
</div>
                {/* 2nd card */}
            <div className="card card-side  bg-base-100 shadow-xl">
  <figure><img  src={offers2} alt="Movie"/></figure>
  <div className="card-body text-center mt-10">
    <h2 className="text-xs font-medium">With bkash payment only</h2>
    <p className="text-base font-semibold text-[#006CE4]">up to 14% discount on the base fare of domestic flights</p>
  
  </div>
</div>
                {/* 3rd card */}
            <div className="card card-side  bg-base-100 shadow-xl">
  <figure><img src={offers3} alt="Movie"/></figure>
  <div className="card-body text-center mt-10">
    <h2 className="text-xs font-medium">With bkash payment only</h2>
    <p className="text-base font-semibold text-[#006CE4]">up to 14% discount on the base fare of domestic flights</p>
  
  </div>
</div>
            </div>
        </div>
    );
};

export default OffersSection;