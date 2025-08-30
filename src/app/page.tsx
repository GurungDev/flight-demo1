
import HeroSection from '@/components/HeroSection'
import Footer from '../components/Footer'
import DestinationSection from '@/components/DestinationSection'
 
export default function Home() {

  return (
    <main className=" bg-gray-800">
      <HeroSection />
      <DestinationSection />
      <Footer />
    </main>
  )
}
