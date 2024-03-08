import Banner from "../../Banner/Banner";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OffersSection from "../OffersSection/OffersSection";
import PopularAirlines from "../PopularAirlines/PopularAirlines";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import Testimonials from "../Testimonials/Testimonials";
import TravelBlog from "../TravelBlog/TravelBlog";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <OffersSection></OffersSection>
            <PopularAirlines></PopularAirlines>
            <Testimonials></Testimonials>
            <TravelBlog></TravelBlog>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;