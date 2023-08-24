import React from 'react';
import { useState } from "react";
import '../styles/homeServices.css';
import { Link } from "react-router-dom";

const HomeServices = () => {
const [services] = useState([
    {
        name: 'Concrete Repair',
        description:'As you already may know, concrete ages over time. Without proper maintenance, it can easily chip or crack and it can be a huge hassle to fix. This is why you should contact our team of experts a call for a concrete repair service.'
    },
    {
        name: 'Concrete Instalation',
        description:'We can visit your location and offer a free estimate for your concrete project. Our professional and punctual team will deliver a quote covering everything required for your project on budget and time.'
    },
    {
        name: 'Foundation',
        description:'The foundation of your property is one of the most important elements when it comes to its safety and reliability. Hire us for a foundation pouring or repair service!'
    },
    {
        name: 'Decorative Concrete',
        description:'If you’re planning to add some hardscaping to your property, consider using decorative concrete. It’s attractive and elegant, and it can bring out the beauty of your home and make it stand out. '
    },
    {
        name: 'Concrete Slabs',
        description:'Pouring a concrete slab yourself can be a huge mistake. This is why you should turn to us for a concrete slab pouring. We have the tools and techniques so you get concrete forms right the first time!'
    }
])

    return (
        <section className="H-services-section">
            <div className="H-sercives-content-box">
                <h3>Services</h3>
                <div className="H-services-container">
                    <div className="services-section-sum">
                        <p>We specialize in providing excellent and affordable concrete services, including concrete installation jobs, slabs, and repair services.</p>
                    </div>
                    <div>
                        {
                            services.map(service => (
                                <div className="H-service_box">
                                    <h5>{service.name}</h5>
                                    <p>{service.description}</p>
                                </div>
                            ))
                        }
                        <div className="services-link">
                            <Link to={'/services'}>Learn More </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeServices;
