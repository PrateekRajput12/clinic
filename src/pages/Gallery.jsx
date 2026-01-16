import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/clinicData';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import '../styles/gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    React.useEffect(() => {
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <div className="gallery">
            {/* Gallery Hero */}
            <section className="gallery-hero section-padding">
                <div className="container">
                    <motion.div
                        className="gallery-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading">Our Clinic Gallery</h1>
                        <p className="subheading">
                            Take a virtual tour of our modern dental facility and see the environment where we create beautiful smiles
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-section section-padding">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="gallery-item"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                layout
                            >
                                <div
                                    className="gallery-image-container"
                                    onClick={() => openLightbox(image, index)}
                                >
                                    <div className="gallery-image-placeholder">
                                        <div className="image-content">
                                            <span className="image-icon">🏥</span>
                                            <div className="image-overlay">
                                                <FaExpand className="expand-icon" />
                                                <span className="image-title">{image.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-info">
                                        <h3 className="image-title-text">{image.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="lightbox-close"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                            >
                                <FaTimes />
                            </button>

                            <div className="lightbox-image-container">
                                <div className="lightbox-image-placeholder">
                                    <div className="lightbox-image-content">
                                        <span className="lightbox-image-icon">🏥</span>
                                    </div>
                                </div>
                                <div className="lightbox-image-info">
                                    <h3>{selectedImage.title}</h3>
                                    <p>{selectedImage.alt}</p>
                                </div>
                            </div>

                            <button
                                className="lightbox-nav prev"
                                onClick={goToPrevious}
                                aria-label="Previous image"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="lightbox-nav next"
                                onClick={goToNext}
                                aria-label="Next image"
                            >
                                <FaChevronRight />
                            </button>

                            <div className="lightbox-counter">
                                {currentIndex + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="gallery-cta section-padding">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Visit Our Modern Clinic</h2>
                        <p className="cta-description">
                            Experience our state-of-the-art facility and meet our friendly team. Schedule a visit today!
                        </p>
                        <button
                            className="cta-button"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Schedule a Visit
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
