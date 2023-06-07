import { useState } from "react";

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
    }
])

    return (
        <section className="H-services-section">
            <div className="H-sercives-content-box">
                <h3>Services</h3>
                <div className="H-services-container">
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
        </section>
    );
}

export default HomeServices;
