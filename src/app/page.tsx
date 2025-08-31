
import HeroSection from '@/components/HeroSection'
import Footer from '../components/Footer'
import DestinationSection from '@/components/DestinationSection'
import LifeExpSlider from '@/components/sliders/LifeExpSlider'
import ExperienceSilder from '@/components/sliders/ExperienceSilder'
import Info from '@/components/Info'
import LatestNews from '@/components/LatestNews'
import ImageComp from '@/components/ImageComp'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Sophisticated Background Pattern */}
      <div className="fixed inset-0">
        {/* Main dark background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        
        {/* Subtle geometric lines pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(148,163,184,0.1)_50%,transparent_51%)] bg-[length:40px_40px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(148,163,184,0.1)_50%,transparent_51%)] bg-[length:40px_40px]"></div>
        </div>
        
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[length:60px_60px]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-300/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <DestinationSection />
        <Info />
        <LifeExpSlider />
        <ImageComp />
        <ExperienceSilder />
        <LatestNews/>
        <Footer />
      </div>
    </main>
  )
}
