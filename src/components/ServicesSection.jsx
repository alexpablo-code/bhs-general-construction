import { useState } from "react";

const ServicesSection = () => {
    const [services] = useState([
        {
            name: 'Concrete Installation',
            description: 'Concrete installation should be done by someone knowledgeable and experienced. If you have to install concrete on your property, it is not wise to attempt to install the concrete yourself. If you are having concrete installed on your property in Port Orchard, WA and the neighboring cities, you can rely on BHS Structures.',
            types: ['Retaining Wall', 'Driveways', 'Patios', 'Pool Decks']
        },
        {
            name: 'Concrete Repair',
            description: 'As you already may know, concrete ages over time. Without proper maintenance, it can easily chip or crack and it can be a huge hassle to fix. This is why you should contact our team of experts a call for a concrete repair service.'
        },
        {
            name: 'Foundation',
            description: 'Perhaps you would like to install an under-floor heating? Or maybe you are building your first home and want a proper foundation? Whatever your project might be, if it involves concrete and masonry, you might want to consider calling an expert. A concrete contractor from BHS Structures can help you correct any mistakes and handle the entire project from beginning to end.'
        },
        {
            name: 'Decorative Concrete',
            description: ''
        }
    ])

    return (
        <section>
            <div className="services-container">
                {}
            </div>
        </section>
    );
}

export default ServicesSection;
