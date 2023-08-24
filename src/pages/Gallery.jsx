import React from 'react';
import '../styles/galleryProjectSection.css';
import LightNavbar from '../components/LightNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GalleryProjectsSection from '../components/GalleryProjectsSection';

const Gallery = () => {
    return (
        <div>
            <LightNavbar/>
            <div className='gallery-title-container'>
                <h2>Our Projects</h2>
            </div>
            <GalleryProjectsSection/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Gallery;
