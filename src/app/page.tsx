
import HeroSection from '@/components/HeroSection'
import Footer from '../components/Footer'
import DestinationSection from '@/components/DestinationSection'
import LifeExpSlider from '@/components/sliders/LifeExpSlider'
import ExperienceSilder from '@/components/sliders/ExperienceSilder'
 
export default function Home() {

  return (
    <main className="  bg-gray-800 flex flex-col space-y-16  ">
       <HeroSection />
       <DestinationSection />

       <LifeExpSlider/>
       <ExperienceSilder />
 
      <Footer />
    </main>
  )
}
