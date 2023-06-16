import '../styles/galleryProjectSection.css';
const pool = require('../components/images/pool_project.png');
const patio = require('../components/images/patio_project.png');

const GalleryProjectsSection = () => {
    
    return (
        <section>
            <div className="project-box">
                <div className="project-text-side">
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img src={pool} alt="pool-project" className='project-image'/>
            </div>
            <div className="project-box">
                <div className="project-text-side">
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img src={patio} alt="patio-project" className='project-image'/>
            </div>
            <div className="project-box">
                <div className="project-text-side">
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img src={pool} alt="pool-project" className='project-image'/>
            </div>
            <div className="project-box">
                <div className="project-text-side">
                    <h3>Family Oasis: Pool Deck & Concrete Repair</h3>
                    <h6>Concrete Repair  Pool Deck</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img src={patio} alt="patio-project" className='project-image'/>
            </div>
        </section>
    );
}

export default GalleryProjectsSection;
