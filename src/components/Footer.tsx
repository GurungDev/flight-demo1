export default function Footer() {
  const footerLinks = {
    'Book & Manage': [
      'Book a flight',
      'Manage booking',
      'Check-in',
      'Flight status',
      'Seat selection',
      'Baggage information'
    ],
    'Support': [
      'Help center',
      'Contact us',
      'Travel requirements',
      'Special assistance',
      'Lost baggage',
      'Complaints'
    ],
    'Experience': [
      'Cabin classes',
      'In-flight dining',
      'Entertainment',
      'Wi-Fi on board',
      'Himalaya Club',
      'Corporate travel'
    ],
    'Company': [
      'About us',
      'Careers',
      'Press releases',
      'Investor relations',
      'Sustainability',
      'News & media'
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ]

  return (
    <footer className="glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Himalaya Jet</div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Experience luxury travel with Himalaya Jet, connecting the world with exceptional service. 
              Discover our award-winning hospitality and extensive global network.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="md:max-w-md">
            <h4 className="font-semibold mb-3 text-white">Stay updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive offers and travel inspiration.
            </p>
            <div className="flex space-x-2 md:space-x-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="md:flex-1 md:px-4 px-2 md:py-2 rounded-l-md glass-light border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <button className="btn-primary rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              <p>&copy; 2024 Himalaya Jet. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
