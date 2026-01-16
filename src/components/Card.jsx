import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    const cardClasses = `card ${className}`.trim();

    return (
        <motion.div
            className={cardClasses}
            {...props}
            whileHover={hover ? { y: -8, scale: 1.02 } : {}}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
