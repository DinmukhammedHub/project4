import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EssenceSection } from './components/EssenceSection';
import { PoetsGallery } from './components/PoetsGallery';
import { PegasusStallCabaret } from './components/PegasusStallCabaret';
import { MetaphorLab } from './components/MetaphorLab';
import { SilverAgeMatrix } from './components/SilverAgeMatrix';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0e0d] text-[#e8e2d8] flex flex-col font-sans selection:bg-[#c99a5b] selection:text-black">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <EssenceSection />
        <PoetsGallery />
        <PegasusStallCabaret />
        <MetaphorLab />
        <SilverAgeMatrix />
        <QuizSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
