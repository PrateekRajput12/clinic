import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { treatments } from '../data/clinicData';
import Card from '../components/Card';
import { FaChevronDown, FaChevronUp, FaTooth, FaHeartbeat, FaSmile, FaUserMd } from 'react-icons/fa';
import '../styles/treatments.css';

const Treatments = () => {
    const [expandedTreatment, setExpandedTreatment] = useState(null);

    const toggleTreatment = (id) => {
        setExpandedTreatment(expandedTreatment === id ? null : id);
    };

    const getTreatmentIcon = (title) => {
        if (title.toLowerCase().includes('preventive')) return FaTooth;
        if (title.toLowerCase().includes('restorative')) return FaHeartbeat;
        if (title.toLowerCase().includes('cosmetic')) return FaSmile;
        return FaUserMd;
    };

    return (
        <div className="treatments">
            {/* Treatments Hero */}
            <section className="treatments-hero section-padding">
                <div className="container">
                    <motion.div
                        className="treatments-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">Our Dental Treatments</h1>
                        <p className="subheading">
                            Comprehensive dental treatments using advanced technology and proven techniques
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Treatments List */}
            <section className="treatments-section section-padding">
                <div className="container">
                    <div className="treatments-list">
                        {treatments.map((treatment, index) => {
                            const Icon = getTreatmentIcon(treatment.title);
                            const isExpanded = expandedTreatment === treatment.id;

                            return (
                                <motion.div
                                    key={treatment.id}
                                    className="treatment-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className={`treatment-card ${isExpanded ? 'expanded' : ''}`}>
                                        <div
                                            className="treatment-header"
                                            onClick={() => toggleTreatment(treatment.id)}
                                        >
                                            <div className="treatment-header-content">
                                                <div className="treatment-icon">
                                                    <Icon />
                                                </div>
                                                <div className="treatment-info">
                                                    <h3 className="treatment-title">{treatment.title}</h3>
                                                    <p className="treatment-description">{treatment.description}</p>
                                                </div>
                                            </div>
                                            <motion.div
                                                className="expand-icon"
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FaChevronDown />
                                            </motion.div>
                                        </div>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    className="treatment-details"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="treatment-details-content">
                                                        <h4 className="details-title">What's Included:</h4>
                                                        <ul className="details-list">
                                                            {treatment.details.map((detail, detailIndex) => (
                                                                <motion.li
                                                                    key={detailIndex}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: detailIndex * 0.1 }}
                                                                >
                                                                    <span className="detail-bullet">✓</span>
                                                                    {detail}
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                        <div className="treatment-action">
                                                            <button className="consultation-btn">
                                                                Schedule Consultation
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Treatment Process */}
            <section className="treatment-process section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading">Our Treatment Process</h2>
                        <p className="subheading">
                            A systematic approach to ensure the best dental care experience
                        </p>
                    </motion.div>

                    <div className="process-steps">
                        {[
                            { step: 1, title: "Consultation", description: "Comprehensive examination and discussion of your dental needs" },
                            { step: 2, title: "Treatment Planning", description: "Personalized treatment plan tailored to your specific requirements" },
                            { step: 3, title: "Treatment", description: "Expert dental care using advanced technology and techniques" },
                            { step: 4, title: "Follow-up", description: "Regular check-ups to ensure long-term success and maintenance" }
                        ].map((process, index) => (
                            <motion.div
                                key={process.step}
                                className="process-step"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="step-number">{process.step}</div>
                                <h3 className="step-title">{process.title}</h3>
                                <p className="step-description">{process.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Treatments;
