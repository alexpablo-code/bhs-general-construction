import About from "../components/About";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import Navbar from "../components/Navbar";


const Homepage = () => {
    return (
        <div>
            <Hero/>
            <HomeServices/>
            <About/>
        </div>
    );
}

export default Homepage;
