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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="project-box even">
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
                    <h3>Liberty Bank - Poulsbo</h3>
                    <h6>Concrete Slabs</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                    <h3>Water Retention Wall - Location?</h3>
                    <h6>Retention Wall</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
    );
}

export default GalleryProjectsSection;
