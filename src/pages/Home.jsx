import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaClock, FaAward } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: FaUserMd,
            title: "Expert Dentists",
            description: "Highly qualified and experienced dental professionals dedicated to your oral health."
        },
        {
            icon: FaHeartbeat,
            title: "Advanced Technology",
            description: "State-of-the-art equipment and modern techniques for the best dental care."
        },
        {
            icon: FaClock,
            title: "Flexible Hours",
            description: "Convenient appointment scheduling including evenings and weekends."
        },
        {
            icon: FaAward,
            title: "Quality Care",
            description: "Committed to providing exceptional dental care with a gentle touch."
        }
    ];

    const stats = [
        { number: "15+", label: "Years Experience" },
        { number: "5000+", label: "Happy Patients" },
        { number: "98%", label: "Success Rate" },
        { number: "24/7", label: "Emergency Support" }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="hero-title"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Your Smile is Our
                                <span className="accent-text"> Priority</span>
                            </motion.h1>
                            <motion.p
                                className="hero-description"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Experience exceptional dental care with our team of dedicated professionals.
                                We combine advanced technology with a compassionate approach to give you
                                the healthy, beautiful smile you deserve.
                            </motion.p>
                            <motion.div
                                className="hero-buttons"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <Button href="/contact" className="hero-btn">
                                    Contact Us
                                </Button>
                                <Button
                                    href="https://wa.me/1234567890?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20dental%20services."
                                    variant="secondary"
                                    className="hero-btn"
                                >
                                    Chat on WhatsApp
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="hero-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="hero-image-placeholder">
                                <div className="dental-illustration">
                                    <span className="large-tooth">🦷</span>
                                    <div className="sparkles">
                                        <span className="sparkle">✨</span>
                                        <span className="sparkle">✨</span>
                                        <span className="sparkle">✨</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading">Why Choose Us</h2>
                        <p className="subheading">
                            We provide comprehensive dental care with a focus on your comfort and satisfaction
                        </p>
                    </motion.div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="feature-card">
                                    <div className="feature-icon">
                                        <feature.icon />
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats section-padding">
                <div className="container">
                    <motion.div
                        className="stats-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="stat-item"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section-padding">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Ready to Transform Your Smile?</h2>
                        <p className="cta-description">
                            Schedule your appointment today and take the first step towards a healthier, more confident smile.
                        </p>
                        {/* <Button href="/contact" className="cta-button">
                            Book Appointment
                        </Button> */}
                        <Link className="cta-button">Book Appointment</Link>
                        <Link className="cta-button" to={'/contact'}>Book Appointment</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
