import About from "../components/About";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import Reviews from "../components/Reviews";


const Homepage = () => {
    return (
        <div>
            <Hero/>
            <HomeServices/>
            <About/>
            <Reviews/>
        </div>
    );
}

export default Homepage;
