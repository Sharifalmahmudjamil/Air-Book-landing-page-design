import logo1 from "../../../public/images/lgoo1.png"
import logo2 from "../../../public/images/logo2.png"
import logo3 from "../../../public/images/logo3.png"
import logo4 from "../../../public/images/logo4.png"
import logo5 from "../../../public/images/logo5.png"
import logo6 from "../../../public/images/logo6.png"
import { CiStar } from "react-icons/ci";

const PopularAirlines = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="font-bold text-3xl mt-10">Popular Airlines</h1>

            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
                    {/* 1st row */}
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo1} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 783 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo2} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Emirates<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">5( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo3} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Turkish Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">5( 753 review )</span></h1>
                    </div>

                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo4} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Malaysia Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">5( 753 review )</span></h1>
                    </div>

                    {/* 2nd row */}
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo5} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Singapore Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">5( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo4} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">malaysia Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">3( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo1} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo6} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">American airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">5( 753 review )</span></h1>
                    </div>

                    {/* 3rd row */}
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo2} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Emirates<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo1} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Biman Bangladesh Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo4} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">malaysia Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 753 review )</span></h1>
                    </div>
                    <div className="flex gap-4">
                    <img className="w-[40px] h-[40px]" src={logo3} alt="" />
                    <h1 className="text-sm font-semibold text-[#006CE4]">Turkish Airlines<CiStar  className="text-yellow-400 "  /><span className="text-[#09182E]">4( 753 review )</span></h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularAirlines;