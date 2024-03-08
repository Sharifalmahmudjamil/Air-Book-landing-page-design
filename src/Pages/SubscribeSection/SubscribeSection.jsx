import image1 from "../../../public/images/Isolation_Mode.png"

const SubscribeSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <img className="w-[340px] h-[340px] lg:mx-10" src={image1} alt="" />
            </div>
            <div className="mt-10 lg:-mx-11">
                <h1 className="text-4xl font-extrabold">Subscribe to our Newsletter!</h1>
                <p className="text-xl font-medium text-blue-500 mt-5">Subscribe to our newsletter and stay updated.</p>
                <input className="lg:w-[500px] h-[50px] border border-blue-500 rounded-2xl mt-5" type="email" name="" id="" placeholder="Your Email"/>
                <button className="btn btn-warning lg:w-[500px] rounded-2xl text-xl font-medium mt-5">Subscribe</button>
            </div>
            </div>
        </div>
    );
};

export default SubscribeSection;