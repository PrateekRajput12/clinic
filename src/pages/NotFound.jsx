import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/Button';
import '../styles/notfound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <motion.div
                    className="not-found-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="error-icon"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaExclamationTriangle />
                    </motion.div>

                    <motion.h1
                        className="error-code"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        className="error-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Page Not Found
                    </motion.h2>

                    <motion.p
                        className="error-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Oops! The page you're looking for seems to have gone missing.
                        Don't worry though, your perfect smile is still waiting for you!
                    </motion.p>

                    <motion.div
                        className="error-actions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Button href="/" className="home-btn">
                            <FaHome className="btn-icon" />
                            Back to Home
                        </Button>

                        <Button href="/contact" variant="secondary" className="contact-btn">
                            <FaSearch className="btn-icon" />
                            Contact Us
                        </Button>
                    </motion.div>

                    <motion.div
                        className="dental-animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <div className="tooth-animation">
                            <span className="tooth">🦷</span>
                            <div className="sparkles">
                                <span className="sparkle">✨</span>
                                <span className="sparkle">✨</span>
                                <span className="sparkle">✨</span>
                            </div>
                        </div>
                        <p className="animation-text">Even lost pages deserve a healthy smile!</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
