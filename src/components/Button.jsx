import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, className = '', ...props }) => {
    const baseClasses = 'btn';
    const variantClasses = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

    const buttonContent = (
        <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedClasses}
                {...props}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
            >
                {buttonContent}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedClasses}
            onClick={onClick}
            {...props}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
        >
            {buttonContent}
        </motion.button>
    );
};

export default Button;
