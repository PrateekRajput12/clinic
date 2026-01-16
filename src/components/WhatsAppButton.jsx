import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    const message = encodeURIComponent("Hello, I want to know more about your dental services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                className="whatsapp-icon-wrapper"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                }}
            >
                <FaWhatsapp />
            </motion.div>
            <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
        </motion.a>
    );
};

export default WhatsAppButton;
