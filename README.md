# DentalCare Clinic Website

A modern, professional, and fully responsive dentist clinic website built with React JS.

## 🚀 Features

- **Modern Design**: Clean, medical UI with dentist-friendly colors
- **Dark/Light Theme**: Seamless theme switching with localStorage persistence
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations throughout
- **Google Maps Integration**: Interactive map on contact page
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **Form Validation**: Client-side form validation with error handling
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessible**: ARIA attributes and keyboard navigation support

## 🛠️ Tech Stack

- **React JS** with Vite
- **JavaScript (ES6+)**
- **Plain CSS** with CSS Variables
- **Framer Motion** for animations
- **React Router DOM** for navigation
- **React Icons** for consistent iconography
- **Google Maps API** for location display

## 📱 Pages

- **Home**: Hero section, features, statistics, and CTAs
- **About**: Dentist profile with animated counters and qualifications
- **Services**: Service cards with hover effects
- **Treatments**: Expandable treatment sections with detailed information
- **Testimonials**: Auto-sliding patient testimonials
- **Gallery**: Image grid with lightbox modal
- **Contact**: Contact form, Google Maps, and clinic information
- **404**: Custom not found page

## 🎨 Color Palette

### Light Mode
- **Background**: #F5FAFF (Soft, clean, almost white)
- **Cards**: #FFFFFF (Content boxes, services, cards)
- **Primary Text**: #0F172A (Dark, readable text)
- **Secondary Text**: #475569 (Subtle info / descriptions)
- **Accent**: #22C55E (Fresh, dentist-friendly green)
- **Primary**: #2563EB (Calm blue for CTAs and highlights)
- **Borders**: #E2E8F0 (Soft separation)

### Dark Mode
- **Background**: #0A1F2A (Deep, professional dark)
- **Cards**: #112B3C (Slightly lighter for readability)
- **Primary Text**: #E5E7EB (Light text on dark background)
- **Secondary Text**: #94A3B8 (Subtle info)
- **Accent**: #22C55E (Same fresh green, pops on dark)
- **Primary**: #3B82F6 (Calm blue for CTAs and highlights)
- **Borders**: #1E293B (Soft separators)

## 🗺 Google Maps Setup

To enable the Google Maps functionality on the Contact page:

1. **Get a Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Maps JavaScript API" and "Places API"
   - Create credentials (API Key)

2. **Update the API Key**:
   - Open `src/pages/Contact.jsx`
   - Replace `YOUR_API_KEY` on line 22 with your actual API key:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places&callback=initMap`;
   ```

3. **Update Clinic Location**:
   - Replace the coordinates on lines 29 and 64 with your clinic's actual location:
   ```javascript
   center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
   // and
   position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
   ```

4. **Restrict API Key** (Recommended):
   - For security, restrict your API key to your domain only
   - Set up proper HTTP referrers in the Google Cloud Console

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd dentist-clinic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
dentist-clinic/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Layout.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Treatments.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/             # CSS files
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── treatments.css
│   │   ├── testimonials.css
│   │   ├── gallery.css
│   │   ├── contact.css
│   │   └── notfound.css
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.js
│   ├── data/               # Static data
│   │   └── clinicData.js
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json
└── vite.config.js
```

## 🎯 Key Features

### Theme System
- **CSS Variables**: All colors use CSS custom properties
- **LocalStorage**: Theme preference persists across sessions
- **Smooth Transitions**: Animated theme switching
- **Automatic Detection**: Respects system preference on first visit

### Animations
- **Page Transitions**: Smooth fade and slide animations
- **Scroll Reveal**: Elements animate when scrolling into view
- **Hover Effects**: Interactive feedback on all clickable elements
- **Loading States**: Smooth loading animations

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - 480px (Small mobile)
  - 640px (Mobile)
  - 768px (Tablet)
  - 1024px (Small desktop)
  - 1200px (Desktop)
- **Flexible Grids**: Adaptive layouts for all screen sizes

## 🔧 Customization

### Updating Colors
All colors are defined in `src/styles/globals.css`. Update the CSS variables to change the color scheme:

```css
:root {
  --accent: #YOUR_COLOR;
  --primary: #YOUR_COLOR;
  /* ... other colors */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Import styles in the page component
4. Update navigation in `src/components/Navbar.jsx`

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: info@dentalcare.com
- Phone: (123) 456-7890
- WhatsApp: Available through the floating button

---

**Built with ❤️ for dental professionals**
