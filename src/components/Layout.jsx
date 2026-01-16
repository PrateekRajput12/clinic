import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/globals.css';
import '../styles/components.css';

const Layout = ({ children }) => {
    const location = useLocation();
    const [theme, setTheme] = React.useState(() => {
        // Get theme from localStorage or default to light
        return localStorage.getItem('theme') || 'light';
    });

    React.useEffect(() => {
        // Apply theme to document element
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="app">
            <Navbar theme={theme} setTheme={setTheme} />
            <main className="main-content">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
