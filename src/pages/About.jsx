import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaHeartbeat, FaUserMd, FaCertificate, FaStethoscope } from 'react-icons/fa';
import Card from '../components/Card';
import '../styles/about.css';

const About = () => {
    const [counters, setCounters] = useState({
        experience: 0,
        patients: 0,
        treatments: 0,
        satisfaction: 0
    });

    const counterRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            const targets = {
                experience: 15,
                patients: 5000,
                treatments: 12000,
                satisfaction: 98
            };

            const increment = {
                experience: targets.experience / steps,
                patients: targets.patients / steps,
                treatments: targets.treatments / steps,
                satisfaction: targets.satisfaction / steps
            };

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                setCounters({
                    experience: Math.min(Math.floor(currentStep * increment.experience), targets.experience),
                    patients: Math.min(Math.floor(currentStep * increment.patients), targets.patients),
                    treatments: Math.min(Math.floor(currentStep * increment.treatments), targets.treatments),
                    satisfaction: Math.min(Math.floor(currentStep * increment.satisfaction), targets.satisfaction)
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isVisible]);

    const qualifications = [
        {
            icon: FaGraduationCap,
            title: "Doctor of Dental Surgery",
            institution: "University of Dental Medicine",
            year: "2008"
        },
        {
            icon: FaCertificate,
            title: "Advanced Cosmetic Dentistry",
            institution: "International Academy of Cosmetic Dentistry",
            year: "2012"
        },
        {
            icon: FaAward,
            title: "Board Certified Periodontist",
            institution: "American Board of Periodontology",
            year: "2015"
        },
        {
            icon: FaStethoscope,
            title: "Implantology Specialization",
            institution: "Global Institute of Dental Implants",
            year: "2018"
        }
    ];

    const values = [
        {
            icon: FaHeartbeat,
            title: "Patient-Centered Care",
            description: "Your comfort and well-being are at the heart of everything we do. We take time to listen and understand your needs."
        },
        {
            icon: FaUserMd,
            title: "Excellence in Dentistry",
            description: "We are committed to the highest standards of dental care, continuously updating our skills and technology."
        },
        {
            icon: FaAward,
            title: "Integrity and Trust",
            description: "Building lasting relationships based on honesty, transparency, and ethical dental practices."
        }
    ];

    return (
        <div className="about">
            {/* About Hero */}
            <section className="about-hero section-padding">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">About Dr. Sarah Johnson</h1>
                        <p className="subheading">
                            Leading dentist with over 15 years of experience in providing exceptional dental care
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Dentist Profile */}
            <section className="dentist-profile section-padding">
                <div className="container">
                    <div className="profile-content">
                        <motion.div
                            className="profile-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="profile-image-placeholder">
                                <div className="profile-illustration">
                                    <div className="avatar-placeholder">
                                        <span className="avatar-icon">👩‍⚕️</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="profile-info"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="profile-title">Meet Your Dentist</h2>
                            <p className="profile-bio">
                                Dr. Sarah Johnson is a highly respected dentist with a passion for creating beautiful, healthy smiles.
                                With extensive training in both general and cosmetic dentistry, she combines artistic skill with
                                advanced dental techniques to deliver outstanding results for her patients.
                            </p>
                            <p className="profile-bio">
                                After graduating with honors from the University of Dental Medicine, Dr. Johnson has dedicated her
                                career to staying at the forefront of dental innovation. She regularly attends international
                                conferences and has published numerous articles on modern dental practices.
                            </p>
                            <div className="profile-specialties">
                                <h3>Areas of Expertise</h3>
                                <ul>
                                    <li>Preventive and General Dentistry</li>
                                    <li>Cosmetic Smile Makeovers</li>
                                    <li>Dental Implants and Restorations</li>
                                    <li>Invisalign and Orthodontics</li>
                                    <li>Full Mouth Rehabilitation</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Animated Counters */}
            <section className="counters section-padding" ref={counterRef}>
                <div className="container">
                    <motion.div
                        className="counters-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div className="counter-item">
                            <div className="counter-number">{counters.experience}+</div>
                            <div className="counter-label">Years Experience</div>
                        </motion.div>
                        <motion.div className="counter-item">
                            <div className="counter-number">{counters.patients.toLocaleString()}+</div>
                            <div className="counter-label">Happy Patients</div>
                        </motion.div>
                        <motion.div className="counter-item">
                            <div className="counter-number">{counters.treatments.toLocaleString()}+</div>
                            <div className="counter-label">Successful Treatments</div>
                        </motion.div>
                        <motion.div className="counter-item">
                            <div className="counter-number">{counters.satisfaction}%</div>
                            <div className="counter-label">Patient Satisfaction</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Qualifications */}
            <section className="qualifications section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading">Education & Qualifications</h2>
                        <p className="subheading">
                            Extensive training and certifications in modern dental practices
                        </p>
                    </motion.div>
                    <div className="qualifications-grid">
                        {qualifications.map((qual, index) => (
                            <motion.div
                                key={qual.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="qualification-card">
                                    <div className="qualification-icon">
                                        <qual.icon />
                                    </div>
                                    <h3 className="qualification-title">{qual.title}</h3>
                                    <p className="qualification-institution">{qual.institution}</p>
                                    <p className="qualification-year">{qual.year}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinic Values */}
            <section className="values section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading">Our Values</h2>
                        <p className="subheading">
                            The principles that guide our practice and patient care
                        </p>
                    </motion.div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="value-card">
                                    <div className="value-icon">
                                        <value.icon />
                                    </div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
