import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/clinicData';
import Card from '../components/Card';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isAutoPlay]);

    const goToPrevious = () => {
        setIsAutoPlay(false);
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentIndex(index);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`star ${index < rating ? 'filled' : 'empty'}`}
            />
        ));
    };

    return (
        <div className="testimonials">
            {/* Testimonials Hero */}
            <section className="testimonials-hero section-padding">
                <div className="container">
                    <motion.div
                        className="testimonials-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">What Our Patients Say</h1>
                        <p className="subheading">
                            Real stories from real patients who have experienced our exceptional dental care
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="featured-testimonial section-padding">
                <div className="container">
                    <div className="testimonial-slider">
                        <motion.div
                            className="testimonial-container"
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="featured-testimonial-card">
                                <div className="testimonial-header">
                                    <FaQuoteLeft className="quote-icon" />
                                    <div className="rating">
                                        {renderStars(testimonials[currentIndex].rating)}
                                    </div>
                                </div>
                                <p className="testimonial-text">
                                    {testimonials[currentIndex].text}
                                </p>
                                <div className="testimonial-footer">
                                    <div className="patient-info">
                                        <div className="patient-avatar">
                                            <span className="avatar-text">
                                                {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div className="patient-details">
                                            <h4 className="patient-name">{testimonials[currentIndex].name}</h4>
                                            <p className="treatment-type">{testimonials[currentIndex].treatment}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Slider Controls */}
                        <div className="slider-controls">
                            <button
                                className="slider-btn prev-btn"
                                onClick={goToPrevious}
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="slider-btn next-btn"
                                onClick={goToNext}
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                        {/* Slider Indicators */}
                        <div className="slider-indicators">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="all-testimonials section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading">More Patient Stories</h2>
                        <p className="subheading">
                            Hear from more of our satisfied patients
                        </p>
                    </motion.div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="testimonial-card">
                                    <div className="testimonial-card-header">
                                        <div className="rating">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                        <FaQuoteLeft className="quote-icon small" />
                                    </div>
                                    <p className="testimonial-card-text">
                                        {testimonial.text}
                                    </p>
                                    <div className="testimonial-card-footer">
                                        <div className="patient-avatar small">
                                            <span className="avatar-text">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div className="patient-details">
                                            <h4 className="patient-name">{testimonial.name}</h4>
                                            <p className="treatment-type">{testimonial.treatment}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="testimonials-cta section-padding">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Join Our Satisfied Patients</h2>
                        <p className="cta-description">
                            Experience the same exceptional care that our patients love. Book your appointment today!
                        </p>
                        <button
                            className="cta-button"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Book Your Appointment
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
