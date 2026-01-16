import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
    ];

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' }
    ];

    const workingHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
    ];

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="footer-content">
                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-logo">
                            <span className="logo-icon">🦷</span>
                            <span className="logo-text">DentalCare</span>
                        </div>
                        <p className="footer-description">
                            Providing exceptional dental care with advanced technology and a compassionate approach.
                            Your smile is our priority.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.label}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <a href={link.path} className="footer-link">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="footer-title">Working Hours</h3>
                        <div className="working-hours">
                            {workingHours.map((schedule, index) => (
                                <div key={index} className="schedule-item">
                                    <FaClock className="schedule-icon" />
                                    <div>
                                        <div className="schedule-day">{schedule.day}</div>
                                        <div className="schedule-hours">{schedule.hours}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="footer-title">Contact Info</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <div className="contact-label">Address</div>
                                    <div className="contact-value">
                                        123 Dental Street, Medical District<br />
                                        City, State 12345
                                    </div>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <a href="tel:+1234567890" className="contact-value">
                                        (123) 456-7890
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <div className="contact-label">Email</div>
                                    <a href="mailto:info@dentalcare.com" className="contact-value">
                                        info@dentalcare.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 DentalCare. All rights reserved.</p>
                        <div className="footer-bottom-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
