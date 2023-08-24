import React from 'react';
import '../styles/projects.css';
import { Link } from 'react-router-dom';
const collage = require('../components/images/work_collage.png');

const Projects = () => {
    return (
        <section className="projects-section">
            <div className='projects-left'>
                <h3 className='projects-title'>Here are some of our recent projects</h3>
                <button className='gallery-button'><Link to={'/projects'} >View our complete gallery</Link></button>
            </div>
            <img src={collage} alt="projects-collage" />
        </section>
    );
}

export default Projects;
