import { useState } from "react";
import '../styles/servicesSection.css';
import { HashLink } from "react-router-hash-link";

const ServicesSection = () => {

    return (
        <section className="services-section">
            <ul className="services-nav">
                <li><a href="#installation-service">Concrete Installation</a></li>
                <li><a href="#repair-service">Concrete Repair</a></li>
                <li><a href="#foundation-service">Foundation</a></li>
                <li><a href="#decorative-service">Decorative Concrete</a></li>
                <li><a href="#slabs-service">Concrete Slabs</a></li>
            </ul>
            <div className="services-container">
                <div className="services-box" id="installation-service">
                    <div alt="concrete-slabs" className="service-bg-img installation-img"></div>
                    <div className="service-text-side">
                        <h3>Concrete Installation</h3>
                        <p>Concrete installation should be done by someone knowledgeable and experienced. If you have to install concrete on your property, it is not wise to attempt to install the concrete yourself. If you are having concrete installed on your property in Port Orchard, WA and the neighboring cities, you can rely on BHS Structures.</p>
                        <ul>
                            <li>Retaining Walls</li>
                            <li>Driveways</li>
                            <li>Patios</li>
                            <li>Pool Decks</li>
                        </ul>

                    </div>
                </div>
                <div className="services-box" id="repair-service">
                    <div alt="concrete-slabs" className="service-bg-img repair-img"></div>
                    <div className="service-text-side">
                        <h3>Concrete Repair</h3>
                        <p>As you already may know, concrete ages over time. Without proper maintenance, it can easily chip or crack and it can be a huge hassle to fix. This is why you should contact our team of experts a call for a concrete repair service.</p>
                    </div>
                </div>
                <div className="services-box" id="foundation-service">
                    <div alt="concrete-slabs" className="service-bg-img foundation-img"></div>
                    <div className="service-text-side">
                        <h3>Foundation</h3>
                        <p>Perhaps you would like to install an under-floor heating? Or maybe you are building your first home and want a proper foundation? Whatever your project might be, if it involves concrete and masonry, you might want to consider calling an expert. A concrete contractor from BHS Structures can help you correct any mistakes and handle the entire project from beginning to end.</p>
                    </div>
                </div>
                <div className="services-box" id="decorative-service">
                    <div alt="concrete-slabs" className="service-bg-img decorative-img"></div>
                    <div className="service-text-side">
                        <h3>Decorative Concrete</h3>
                        <p>If you’re planning to add some hardscaping to your property, consider using decorative concrete. This material is highly durable and can last for years with proper installation and regular care. It’s also attractive and elegant, and it can bring out the beauty of your home and make it stand out. Don’t worry since BHS Structures is always ready to help you with designing and building your decorative concrete surfaces!</p>
                    </div>
                </div>
                <div className="services-box" id="slabs-service">
                    <div alt="concrete-slabs" className="service-bg-img slabs-img"></div>
                    <div className="service-text-side">
                        <h3>Concrete Slabs</h3>
                        <p>Instead of using pavers or brick, many homeowners choose these slabs because of several reasons. For starters, these slabs can act as a walkway for people who want to bring their pets for a walk outside. They can easily step on the concrete slab without having to get their feet dirty and ensure that their pets are safe from the elements. Second, concrete is a durable material that can withstand wear and tear and will not get easily damaged. So, by installing these slabs instead of other paving materials, you can ensure that your property’s walkway will last for a long time.</p>
                        <ul>
                            <li>Metal Building Slabs</li>
                            <li>Barn Slabs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
