import Header from '../components/Header'
import FlightSearch from '../components/FlightSearch'
import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'

export default function Home() {
  const destinations = [
    { city: 'London', country: 'United Kingdom', price: 'From £299' },
    { city: 'New York', country: 'United States', price: 'From $599' },
    { city: 'Dubai', country: 'UAE', price: 'From AED 999' },
    { city: 'Bangkok', country: 'Thailand', price: 'From THB 15,999' },
    { city: 'Paris', country: 'France', price: 'From €399' },
    { city: 'Tokyo', country: 'Japan', price: 'From ¥89,999' },
    { city: 'Sydney', country: 'Australia', price: 'From AUD 1,299' },
    { city: 'Singapore', country: 'Singapore', price: 'From SGD 799' }
  ]

  const features = [
    {
      title: 'Award-winning service',
      description: 'Consistently recognized for excellence in customer service and hospitality',
      icon: '🏆'
    },
    {
      title: 'Global network',
      description: 'Connect to over 80 destinations across 6 continents with our extensive route network',
      icon: '🌍'
    },
    {
      title: 'Premium experience',
      description: 'Enjoy luxury amenities, gourmet dining, and world-class entertainment on every flight',
      icon: '✨'
    },
    {
      title: 'Etihad Guest',
      description: 'Join our loyalty program and earn miles on every flight with exclusive member benefits',
      icon: '👑'
    }
  ]

  const offers = [
    {
      badge: 'LIMITED TIME',
      title: 'Summer Sale',
      description: 'Book your summer getaway and save up to 30% on selected routes to Europe and Asia.',
      buttonText: 'View offers',
      buttonLink: '#'
    },
    {
      badge: 'ETIHAD GUEST',
      title: 'Double Miles',
      description: 'Earn double miles on all flights booked this month. Join Etihad Guest for free.',
      buttonText: 'Join now',
      buttonLink: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className=''>
        <Header />
      </div>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Discover the world with Etihad
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Experience luxury travel with our award-winning service and destinations across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Book a flight
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View offers
                </button>
              </div>
            </div>
            <div className="relative">
              <FlightSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular destinations</h2>
            <p className="text-lg text-gray-600">Explore our most sought-after routes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                city={destination.city}
                country={destination.country}
                price={destination.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why fly with Etihad?</h2>
            <p className="text-lg text-gray-600">Experience the difference of premium air travel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special offers</h2>
            <p className="text-lg text-gray-600">Unlock exclusive deals and discounts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-sm font-semibold mb-2">{offer.badge}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  {offer.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of travelers who choose Etihad for their adventures around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Book your flight
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
