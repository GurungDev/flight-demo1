 
import HeroSection from '@/components/HeroSection'
import Footer from '../components/Footer'
import DestinationSection from '@/components/DestinationSection'
import LifeExpSlider from '@/components/sliders/LifeExpSlider'
import ExperienceSilder from '@/components/sliders/ExperienceSilder'
 
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
      title: 'Himalaya Club',
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
      badge: 'HIMALAYA CLUB',
      title: 'Double Miles',
      description: 'Earn double miles on all flights booked this month. Join Himalaya Club for free.',
      buttonText: 'Join now',
      buttonLink: '#'
    }
  ]

  return (
    <main className="  bg-white flex flex-col space-y-16 px-36">
       <HeroSection />
       <DestinationSection />

       <LifeExpSlider/>
       <ExperienceSilder />
      <Footer />
    </main>
  )
}
