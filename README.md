# Buntu Majaja - Personal Website

A professional personal website for Buntu Majaja, Ecosystem Builder, Strategist & Investor, showcasing his work in building Africa's innovation ecosystem.

## 🌟 Features

### Design & Branding
- **Dark-first design** with custom African-inspired color palette
- **Professional photography** integration from speaker profile
- **Geometric patterns** and modern UI elements
- **Responsive design** optimized for all devices
- **Accessibility-focused** with proper focus states and reduced motion support

### Content Sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **Channels Section**: Three main navigation areas (About, Portfolio, Newsletter)
- **About Section**: Mission, philosophy, and key achievements with statistics
- **Portfolio Section**: Interactive project showcase with tag-based filtering
- **Newsletter Section**: FutureSight Africa subscription and featured posts
- **Speaking Section**: Professional speaking services (hidden in navigation)

### Interactive Elements
- **Smooth scrolling navigation** with sticky header
- **Portfolio filtering** by project tags
- **Hover animations** and micro-interactions
- **Framer Motion animations** with staggered reveals
- **Modal project details** for in-depth case studies

## 🎨 Design System

### Color Palette
- **Primary**: Electric Cyan (#00E5FF)
- **Secondary**: Navy Blue (#1E3A5F)
- **Accent**: Copper Bronze (#C8956D)
- **Background**: Near Black (#0B0B0C)
- **Text**: Off White (#EDEDED)

### Typography
- **Headings**: Modern sans-serif with gradient effects
- **Body**: Clean, readable typography optimized for web
- **Emphasis**: Strategic use of color and weight for hierarchy

## 🚀 Technology Stack

- **Framework**: React 18 with modern hooks
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui with Radix primitives
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for smooth interactions
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel-ready with automatic CI/CD

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer with social links
│   ├── HeroSection.jsx    # Landing hero section
│   ├── ChannelsSection.jsx # Main navigation channels
│   ├── AboutSection.jsx   # About content and achievements
│   ├── PortfolioSection.jsx # Project showcase
│   ├── NewsletterSection.jsx # Newsletter signup
│   ├── SpeakingSection.jsx # Speaking services
│   ├── ChannelCard.jsx    # Reusable channel card
│   └── Section.jsx        # Section wrapper component
├── assets/                # Images and static files
├── App.jsx               # Main application component
├── App.css               # Global styles and design tokens
└── main.jsx              # Application entry point
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- pnpm (preferred) or npm

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Server
The development server runs on `http://localhost:5173` with hot module replacement for instant updates during development.

## 📊 Content & Data

### Portfolio Projects
1. **SA Innovation Summit** - Africa's largest startup event (2020-Present)
2. **TechTribe Accelerator** - Virtual accelerator program (2020-2024)
3. **AndAfrica Investment Platform** - Japan-Africa investment bridge (2018-2019)
4. **Mining Innovation Project** - Strategic consulting (2017)

### Key Statistics
- 15,000+ Event Attendees
- 56 Countries Reached
- $22M+ Investment Deals Facilitated
- 200+ Founders Mentored

### Contact Information
- **Email**: buntumajaja@gmail.com
- **Phone**: +27 83 384 6879
- **LinkedIn**: linkedin.com/in/buntumajaja
- **Newsletter**: future-sight-africa.substack.com

## 🔧 Customization

### Adding New Portfolio Projects
1. Edit `src/components/PortfolioSection.jsx`
2. Add new project object to the `projects` array
3. Include title, role, summary, outcome, date, tags, and details

### Updating Content
- **About Section**: Edit `src/components/AboutSection.jsx`
- **Contact Info**: Update `src/components/Footer.jsx`
- **Hero Content**: Modify `src/components/HeroSection.jsx`

### Styling Changes
- **Colors**: Update CSS custom properties in `src/App.css`
- **Typography**: Modify Tailwind classes in components
- **Animations**: Adjust Framer Motion configurations

## 🌐 Deployment

The website is optimized for deployment on modern hosting platforms:

- **Vercel**: Automatic deployment from Git repository
- **Netlify**: Drag-and-drop or Git-based deployment
- **GitHub Pages**: Static site hosting
- **Custom Server**: Build and serve the `dist` folder

### Build Output
- Optimized JavaScript bundles with code splitting
- Compressed CSS with unused styles removed
- Optimized images with proper formats
- SEO-friendly HTML with meta tags

## 📈 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: WebP format with proper sizing
- **Code Splitting**: Lazy loading for optimal performance

## 🎯 SEO & Analytics

- **Meta Tags**: Comprehensive SEO optimization
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for search engines
- **Analytics Ready**: Easy integration with tracking services

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Proper layout for medium screens
- **Desktop Enhanced**: Rich interactions for larger screens
- **Touch Friendly**: Appropriate touch targets and gestures

## 🔒 Security & Privacy

- **No External Dependencies**: Minimal third-party scripts
- **Privacy Focused**: No tracking without explicit consent
- **Secure Headers**: Proper security configurations
- **HTTPS Ready**: SSL/TLS encryption support

## 📞 Support & Maintenance

For updates, modifications, or technical support, contact the development team or refer to the component documentation within the codebase.

---

**Built with ❤️ for African Innovation**
