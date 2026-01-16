import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import Card from '../components/Card';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);

    // useEffect(() => {
    //     // Load Google Maps script with proper API key handling
    //     const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY';

    //     // Only load map if we have an API key
    //     if (apiKey !== 'YOUR_API_KEY') {
    //         const script = document.createElement('script');
    //         script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    //         script.async = true;
    //         script.defer = true;

    //         window.initMap = () => {
    //             setMapLoaded(true);
    //             const mapOptions = {
    //                 center: { lat: 40.7128, lng: -74.0060 }, // New York coordinates (replace with actual clinic location)
    //                 zoom: 15,
    //                 styles: [
    //                     {
    //                         featureType: "all",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#f5faff" }] // Light mode background
    //                     },
    //                     {
    //                         featureType: "all",
    //                         elementType: "labels.text.fill",
    //                         stylers: [{ color: "#0f172a" }] // Light mode text
    //                     },
    //                     {
    //                         featureType: "all",
    //                         elementType: "labels.text.stroke",
    //                         stylers: [{ color: "#ffffff" }]
    //                     },
    //                     {
    //                         featureType: "water",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#2563eb" }]
    //                     },
    //                     {
    //                         featureType: "poi",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#22c55e" }]
    //                     }
    //                 ]
    //             };

    //             const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    //             // Add marker for clinic location
    //             new window.google.maps.Marker({
    //                 position: { lat: 40.7128, lng: -74.0060 },
    //                 map: map,
    //                 title: 'DentalCare Clinic',
    //                 icon: {
    //                     path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13s7-7.75 7-13c0-3.87-3.13-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5 2.5-1.12 2.5-2.5 1.12-2.5 2.5z',
    //                     fillColor: '#22c55e',
    //                     fillOpacity: 1,
    //                     strokeWeight: 2,
    //                     strokeColor: '#ffffff',
    //                     scale: 2
    //                 }
    //             });

    //             // Update map styles based on theme
    //             const updateMapTheme = () => {
    //                 const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    //                 const darkStyles = [
    //                     {
    //                         featureType: "all",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#0a1f2a" }] // Dark mode background
    //                     },
    //                     {
    //                         featureType: "all",
    //                         elementType: "labels.text.fill",
    //                         stylers: [{ color: "#e5e7eb" }] // Dark mode text
    //                     },
    //                     {
    //                         featureType: "all",
    //                         elementType: "labels.text.stroke",
    //                         stylers: [{ color: "#112b3c" }]
    //                     },
    //                     {
    //                         featureType: "water",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#3b82f6" }]
    //                     },
    //                     {
    //                         featureType: "poi",
    //                         elementType: "geometry",
    //                         stylers: [{ color: "#22c55e" }]
    //                     }
    //                 ];

    //                 map.setOptions({ styles: isDark ? darkStyles : mapOptions.styles });
    //             };

    //             // Listen for theme changes
    //             const observer = new MutationObserver(updateMapTheme);
    //             observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    //         };

    //         document.head.appendChild(script);

    //         return () => {
    //             if (document.head.contains(script)) {
    //                 document.head.removeChild(script);
    //             }
    //         };
    //     }, []);

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters long';
        }

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const errors = validateForm();
    //     if (Object.keys(errors).length > 0) {
    //         setFormErrors(errors);
    //         return;
    //     }

    //     // Simulate form submission
    //     setIsSubmitted(true);

    //     // Reset form after 3 seconds
    //     setTimeout(() => {
    //         setFormData({
    //             name: '',
    //             phone: '',
    //             email: '',
    //             message: ''
    //         });
    //         setIsSubmitted(false);
    //     }, 3000);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            toast.error("Please fix the errors in the form");
            return;
        }

        try {
            setIsSubmitted(true);
            console.log("here");
            const res = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (!res.ok) {
                throw new Error("Email failed");
            }

            toast.success("Message sent successfully! We will contact you soon.");

            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error(error.message);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitted(false);
        }
    };


    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: "Address",
            content: "123 Dental Street, Medical District\nCity, State 12345",
            action: "Get Directions"
        },
        {
            icon: FaPhone,
            title: "Phone",
            content: "(123) 456-7890",
            action: "Call Now"
        },
        {
            icon: FaEnvelope,
            title: "Email",
            content: "info@dentalcare.com",
            action: "Send Email"
        },
        {
            icon: FaClock,
            title: "Working Hours",
            content: "Mon-Fri: 9:00 AM - 8:00 PM\nSat: 9:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM",
            action: ""
        }
    ];

    return (
        <div className="contact">
            {/* Contact Hero */}
            <section className="contact-hero section-padding">
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">Get in Touch</h1>
                        <p className="subheading">
                            We're here to answer your questions and provide the dental care you need
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section section-padding">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <info.icon />
                                    </div>
                                    <h3 className="contact-info-title">{info.title}</h3>
                                    <div className="contact-info-content">
                                        {info.content.split('\n').map((line, lineIndex) => (
                                            <p key={lineIndex}>{line}</p>
                                        ))}
                                    </div>
                                    {info.action && (
                                        <a
                                            href={info.action === "Get Directions" ? "https://maps.google.com/?q=123+Dental+Street+Medical+District" :
                                                info.action === "Call Now" ? "tel:+1234567890" :
                                                    info.action === "Send Email" ? "mailto:info@dentalcare.com" : "#"}
                                            className="contact-info-action"
                                        >
                                            {info.action}
                                        </a>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="contact-main section-padding">
                <div className="container">
                    <div className="contact-main-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="contact-form-card">
                                <h2 className="form-title">Send Us a Message</h2>
                                <p className="form-description">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>

                                {isSubmitted ? (
                                    <motion.div
                                        className="success-message"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <FaCheckCircle className="success-icon" />
                                        <h3>Thank You!</h3>
                                        <p>Your message has been sent successfully. We'll contact you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`form-input ${formErrors.name ? 'error' : ''}`}
                                                placeholder="Your full name"
                                            />
                                            {formErrors.name && (
                                                <span className="error-message">{formErrors.name}</span>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`form-input ${formErrors.phone ? 'error' : ''}`}
                                                placeholder="Your phone number"
                                            />
                                            {formErrors.phone && (
                                                <span className="error-message">{formErrors.phone}</span>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`form-input ${formErrors.email ? 'error' : ''}`}
                                                placeholder="your.email@example.com"
                                            />
                                            {formErrors.email && (
                                                <span className="error-message">{formErrors.email}</span>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                                                placeholder="Tell us about your dental needs or questions..."
                                                rows="5"
                                            />
                                            {formErrors.message && (
                                                <span className="error-message">{formErrors.message}</span>
                                            )}
                                        </div>

                                        <button type="submit" className="submit-btn" disabled={isSubmitted}>
                                            {isSubmitted ? "Sending..." : "Send Message"}
                                        </button>

                                    </form>
                                )}
                            </Card>
                        </motion.div>

                        {/* Google Map */}
                        {/* <motion.div
                            className="map-container"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="map-card">
                                <h3 className="map-title">Find Us</h3>
                                <div className="map-wrapper">
                                    <div id="map" className="google-map">
                                        {!mapLoaded && (
                                            <div className="map-loading">
                                                <div className="loading-spinner"></div>
                                                <p>Loading map...</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="map-info-overlay">
                                        <h4>DentalCare Clinic</h4>
                                        <p>123 Dental Street, Medical District</p>
                                        <p>City, State 12345</p>
                                        <a
                                            href="https://maps.google.com/?q=123+Dental+Street+Medical+District"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="map-link"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div> */}
                        <motion.div
                            className="map-container"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="map-card">
                                <h3 className="map-title">Find Us</h3>

                                <div className="map-wrapper">
                                    <iframe
                                        title="DentalCare Clinic Location"
                                        src="https://www.google.com/maps?q=123+Dental+Street+Medical+District&output=embed"
                                        width="100%"
                                        height="350"
                                        style={{ border: 0, borderRadius: "12px" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>

                                    <div className="map-info-overlay">
                                        <h4>DentalCare Clinic</h4>
                                        <p>123 Dental Street, Medical District</p>
                                        <p>City, State 12345</p>

                                        <a
                                            href="https://maps.google.com/?q=123+Dental+Street+Medical+District"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="map-link"
                                        >
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>


                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="emergency-contact section-padding">
                <div className="container">
                    <motion.div
                        className="emergency-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="emergency-title">Dental Emergency?</h2>
                        <p className="emergency-description">
                            For urgent dental care, don't hesitate to call us immediately.
                        </p>
                        <a href="tel:+1234567890" className="emergency-btn">
                            <FaPhone className="emergency-icon" />
                            Call Emergency Line
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
