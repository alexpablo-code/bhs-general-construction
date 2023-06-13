import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";


const Homepage = () => {
    return (
        <div>
            <Hero/>
            <HomeServices/>
            <About/>
            <Reviews/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Homepage;
