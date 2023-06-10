import { useState } from "react";
import '../styles/homeServices.css';

const HomeServices = () => {
const [services] = useState([
    {
        name: 'Concrete Repair',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
    },
    {
        name: 'Concrete Instalation',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
    },
    {
        name: 'Concrete Service',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
    },
    {
        name: 'Foundation',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
    },
    {
        name: 'Decorative Concrete',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
    },
    {
        name: 'Concrete Slabs',
        description:'lrem ispum djfjhg ifhui fidjsio hgnae djje ldiehb rehi dehesr iueosadn'
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeServices;
