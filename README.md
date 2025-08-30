# Himalaya Jet Homepage Clone

A modern, responsive clone of the Himalaya Jet homepage built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional airline website design
- 📱 **Responsive Layout**: Mobile-first approach with responsive design
- ✈️ **Flight Search**: Interactive flight booking form with validation
- 🗺️ **Destination Showcase**: Popular destinations with pricing information
- 🏆 **Feature Highlights**: Company benefits and services
- 💰 **Special Offers**: Promotional content and deals
- 🎯 **Interactive Elements**: Hover effects, transitions, and animations
- 🔍 **Search Functionality**: Comprehensive flight search form
- 📱 **Mobile Navigation**: Hamburger menu for mobile devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emoji icons and SVG icons
- **State Management**: React hooks (useState)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── FlightSearch.tsx     # Flight booking form
│   ├── DestinationCard.tsx  # Destination display cards
│   └── Footer.tsx           # Comprehensive footer with links
```

## Components

### Header
- Responsive navigation menu
- Mobile hamburger menu
- User authentication buttons
- Himalaya Jet branding

### FlightSearch
- From/To destination inputs
- Date selection (departure/return)
- Passenger count and class selection
- Form validation and state management

### DestinationCard
- Destination information display
- Pricing information
- Interactive hover effects
- Book now buttons

### Footer
- Comprehensive link organization
- Newsletter signup
- Social media links
- Legal information

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd demo1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The design uses a blue color scheme that can be customized in `tailwind.config.js`:

```javascript
colors: {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize as needed
  }
}
```

### Content
Update the content in the respective component files:
- Destinations: `src/app/page.tsx` - `destinations` array
- Features: `src/app/page.tsx` - `features` array
- Offers: `src/app/page.tsx` - `offers` array

### Styling
Modify styles in:
- `src/app/globals.css` - Global styles and custom utilities
- Component files - Component-specific styles using Tailwind classes

## Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly form inputs
- Optimized spacing for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Next.js 15 optimizations
- Tailwind CSS purging
- Optimized images and assets
- Efficient component rendering

## Future Enhancements

- [ ] Add real flight search API integration
- [ ] Implement user authentication
- [ ] Add booking management system
- [ ] Include real-time flight status
- [ ] Add multi-language support
- [ ] Implement PWA features
- [ ] Add dark mode toggle
- [ ] Include real destination images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only. All Himalaya Jet branding and content is property of Himalaya Jet.

## Acknowledgments

- Design inspired by modern airline websites
- Built with Next.js and Tailwind CSS
- Icons from various sources (emoji, SVG)
