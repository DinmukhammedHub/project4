import React, { useState, useEffect } from 'react';
import { cabaretAudio } from '../utils/audioSynthesizer';
import { Volume2, VolumeX } from 'lucide-react';

export const Header: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    return () => {
      cabaretAudio.stop();
    };
  }, []);

  const toggleSound = () => {
    const active = cabaretAudio.toggle();
    setIsPlayingAudio(active);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f0e0d]/90 backdrop-blur-md border-b border-[#2d2822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="text-xl sm:text-2xl font-serif tracking-wide text-[#e8c382] hover:text-[#f4d9a6] transition-colors whitespace-nowrap">
          Имажинизм
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium text-[#b5a999]">
          <a href="#essence" className="hover:text-[#f4d9a6] transition-colors">
            Идея и манифест
          </a>
          <a href="#poets" className="hover:text-[#f4d9a6] transition-colors">
            Орден поэтов
          </a>
          <a href="#cabaret" className="hover:text-[#f4d9a6] transition-colors">
            «Стойло Пегаса»
          </a>
          <a href="#metaphors" className="hover:text-[#f4d9a6] transition-colors">
            Лаборатория метафоры
          </a>
          <a href="#matrix" className="hover:text-[#f4d9a6] transition-colors">
            Сравнительная таблица
          </a>
          <a href="#quiz" className="hover:text-[#f4d9a6] transition-colors">
            Тест-викторина
          </a>
        </nav>

        {/* Zone 3: Primary action - Audio Atmosphere */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleSound}
            title={isPlayingAudio ? 'Выключить атмосферу кабаре 1920-х' : 'Включить атмосферу кабаре (винил и клавиши)'}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
              isPlayingAudio
                ? 'bg-[#c99a5b] text-black shadow-lg shadow-[#c99a5b]/20 font-semibold'
                : 'bg-[#1a1713] text-[#b5a999] hover:text-white border border-[#3b342a]'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-black" />
                <span>Звук «Пегаса» вкл</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Атмосфера 1920-х</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
