import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/clinicData';
import Card from '../components/Card';
import Button from '../components/Button';
import '../styles/services.css';

const Services = () => {
    return (
        <div className="services">
            {/* Services Hero */}
            <section className="services-hero section-padding">
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">Our Dental Services</h1>
                        <p className="subheading">
                            Comprehensive dental care solutions tailored to your unique needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section section-padding">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="service-card">
                                    <div className="service-icon">
                                        <span className="service-emoji">{service.icon}</span>
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <Button href="/contact" className="service-btn">
                                        Learn More
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta section-padding">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Need a Dental Service?</h2>
                        <p className="cta-description">
                            Schedule a consultation with our expert dentists to discuss your dental needs and find the best treatment plan for you.
                        </p>
                        <Button href="/contact" className="cta-button">
                            Book Consultation
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
