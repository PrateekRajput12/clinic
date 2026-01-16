import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/treatments', label: 'Treatments' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="nav-content">
                    <motion.a
                        href="/"
                        className="nav-logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="logo-icon">🦷</span>
                        <span className="logo-text">DentalCare</span>
                    </motion.a>

                    <div className="nav-menu">
                        <ul className="nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a href={link.path} className="nav-link">
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="theme-toggle"
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </motion.button>
                    </div>

                    <motion.button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </motion.button>
                </div>

                <motion.div
                    className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                    initial={{ height: 0 }}
                    animate={{ height: isMenuOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <a
                                    href={link.path}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button
                                className="mobile-theme-toggle"
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <FaMoon /> : <FaSun />}
                                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                            </button>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
