import '../styles/galleryProjectSection.css';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const pool = require('../components/images/pool_project.png');
const patio = require('../components/images/patio_project.png');
const about1 = require('../components/images/about_1.png');
const about2 = require('../components/images/about_2.png');

const GalleryProjectsSection = () => {

    const slideImages = [
        require('../components/images/pool_project.png'),
        require('../components/images/patio_project.png'),
        require('../components/images/about_1.png'),
        require('../components/images/about_2.png'),
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
                    <Slide>
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
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="project-box odd">
                <div className='slide-container'>
                    <Slide>
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
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="project-box even">
                <div className='slide-container'>
                    <Slide>
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
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="project-box odd">
                <div className='slide-container'>
                    <Slide>
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
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
    );
}

export default GalleryProjectsSection;
