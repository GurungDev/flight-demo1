
import HeroSection from '@/components/HeroSection'
import Footer from '../components/Footer'
import DestinationSection from '@/components/DestinationSection'
import LifeExpSlider from '@/components/sliders/LifeExpSlider'
import ExperienceSilder from '@/components/sliders/ExperienceSilder'
import Info from '@/components/Info'
import LatestNews from '@/components/LatestNews'
 
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 space-y-8">
        <HeroSection />
        <DestinationSection />
        <Info />
        <LifeExpSlider/>
        <ExperienceSilder />
        <LatestNews/>
        <Footer />
      </div>
    </main>
  )
}
