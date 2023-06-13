import '../styles/projects.css';
const collage = require('../components/images/work_collage.png');

const Projects = () => {
    return (
        <section className="projects-section">
            <div className='projects-left'>
                <h3 className='projects-title'>Here are some of our recent projects</h3>
                <button className='gallery-button'>View our complete gallery</button>
            </div>
            <img src={collage} alt="projects-collage" />
        </section>
    );
}

export default Projects;
