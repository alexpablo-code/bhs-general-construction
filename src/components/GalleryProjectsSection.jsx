import '../styles/galleryProjectSection.css';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const pool = require('../components/images/pool_project.png');
const patio = require('../components/images/patio_project.png');
const about1 = require('../components/images/about_1.png');
const about2 = require('../components/images/about_2.png');

const GalleryProjectsSection = () => {

    const slideImages = [
        require('../components/images/coffeshop1.png'),
        require('../components/images/coffeshop2.png'),
        require('../components/images/coffeshop3.png'),
        require('../components/images/coffeshop4.png'),
        require('../components/images/coffeshop5.png'),
        require('../components/images/coffeshop6.png'),
    ];

    const slideImages2 = [
        require('../components/images/homewtown1.png'),
        require('../components/images/homewtown2.png'),
        require('../components/images/homewtown3.png'),
        require('../components/images/homewtown4.png'),
        require('../components/images/homewtown5.png'),
        require('../components/images/homewtown6.png'),
    ];

    const slideImages3 = [
        require('../components/images/sport1.png'),
        require('../components/images/sport2.png'),
        require('../components/images/sport3.png'),
        require('../components/images/sport4.png'),
        require('../components/images/sport5.png'),
        require('../components/images/sport6.png'),
    ];

    const slideImages4 = [
        require('../components/images/water1.png'),
        require('../components/images/water1.png'),
        require('../components/images/water3.png'),
        require('../components/images/water4.png'),
        require('../components/images/water5.png'),
        require('../components/images/water6.png'),
    ];

    const slideImages5 = [
        require('../components/images/bank1.png'),
        require('../components/images/bank2.png'),
        require('../components/images/bank3.png'),
        require('../components/images/bank4.png'),
        require('../components/images/bank5.png'),
        require('../components/images/bank6.png'),
    ];
    // const imagesUrlExample = [ 
    //     {
    //         url: 'https://images.unsplash.com/photo-123234',
    //         caption: 'First Slide'
    //     },
    //     {
    //         url: 'https://images.unsplash.com/photo-123234',
    //         caption: 'First Slide'
    //     },
    //     {
    //         url: 'https://images.unsplash.com/photo-123234',
    //         caption: 'First Slide'
    //     },
    //     {
    //         url: 'https://images.unsplash.com/photo-123234',
    //         caption: 'First Slide'
    //     }
    // ];
    
    return (
        <section>
            <div className="project-box even">
                <div className='slide-container'>
                    <Slide autoplay={false}>
                        {
                            slideImages.map((image, index) => (
                                <div key={index} className='each-slide-effect'>
                                    <div style={{ 'backgroundImage': `url(${image})` }}>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="project-text-side">
                    <h3>Gravity Coffee - Port Orchard</h3>
                    <h6>Concrete Installation & Foundation</h6>
                    <p>Enjoy a glimpse of one of our proudest achievements, the Gravity Coffee project. Our expert team undertook the concrete installation and foundation work for this establishment, contributing to the sturdy and reliable infrastructure that supports this vibrant Port Orchard spot.</p>
                </div>
            </div>
            <div className="project-box odd">
                <div className='slide-container'>
                    <Slide autoplay={false}>
                        {
                            slideImages2.map((image, index) => (
                                <div key={index} className='each-slide-effect'>
                                    <div style={{ 'backgroundImage': `url(${image})` }}>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="project-text-side">
                    <h3>Manette View Town Homes - Bremerton</h3>
                    <h6>Concrete Foundation</h6>
                    <p>Discover our involvement in the development of the Manette Town Homes. With our specialized expertise, we took charge of the concrete foundation work, playing a crucial role in establishing the strong base upon which these modern homes stand proudly in Bremerton's charming Manette neighborhood.</p>
                </div>
            </div>
            <div className="project-box even">
                <div className='slide-container'>
                    <Slide autoplay={false}>
                        {
                            slideImages5.map((image, index) => (
                                <div key={index} className='each-slide-effect'>
                                    <div style={{ 'backgroundImage': `url(${image})` }}>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="project-text-side">
                    <h3>Liberty Bank - Poulsbo</h3>
                    <h6>Concrete Slabs</h6>
                    <p>Step into our contribution to the vibrant business landscape with the Liberty Bank project. As an essential part of this commercial endeavor, we took on the responsibility of crafting the foundation and concrete slabs. Our dedication to precision and quality shines through, providing the reliable groundwork that supports the growth and success of Liberty Bank in Poulsbo, Washington.</p>
                </div>
            </div>
            <div className="project-box odd">
                <div className='slide-container'>
                    <Slide autoplay={false}>
                        {
                            slideImages3.map((image, index) => (
                                <div key={index} className='each-slide-effect'>
                                    <div style={{ 'backgroundImage': `url(${image})` }}>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="project-text-side">
                    <h3>Home Sports Court</h3>
                    <h6>Concrete Installation</h6>
                    <p>Experience the excitement of our involvement in a dynamic residential sports court project. Taking the lead from the very beginning, we orchestrated the entire process, commencing with the creation of the concrete foundation. The end result is nothing short of spectacular – a beautifully realized sports court that stands as a testament to our expertise and passion for turning visions into reality.</p>
                </div>
            </div>
            <div className="project-box even">
                <div className='slide-container'>
                    <Slide autoplay={false}>
                        {
                            slideImages4.map((image, index) => (
                                <div key={index} className='each-slide-effect'>
                                    <div style={{ 'backgroundImage': `url(${image})` }}>
                                        <span></span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                </div>
                <div className="project-text-side">
                    <h3>Water Retention Wall - Silverthorne Silverdale</h3>
                    <h6>Retention Wall</h6>
                    <p>As a testament to our capabilities, we undertook the monumental task of constructing a retention wall that spans an impressive 400 feet in length and soars to a height of 18 feet. Our expertise in structural integrity shines through in this project, offering not only functional water management but also an awe-inspiring example of our commitment to excellence in construction.</p>
                </div>
            </div>
        </section>
    );
}

export default GalleryProjectsSection;
