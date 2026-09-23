import React, { useState } from 'react';
import { POETS_LIST, OTHER_FIGURES } from '../data/imaginismData';
import { Poet } from '../types';
import { recitePoem, stopRecitation } from '../utils/audioSynthesizer';
import { Play, Square, BookMarked, Sparkles } from 'lucide-react';

export const PoetsGallery: React.FC = () => {
  const [selectedPoet, setSelectedPoet] = useState<Poet>(POETS_LIST[0]);
  const [isReciting, setIsReciting] = useState(false);

  const handleRecite = (text: string) => {
    if (isReciting) {
      stopRecitation();
      setIsReciting(false);
    } else {
      setIsReciting(true);
      recitePoem(text, () => {
        setIsReciting(false);
      });
    }
  };

  const handleSelectPoet = (poet: Poet) => {
    if (isReciting) {
      stopRecitation();
      setIsReciting(false);
    }
    setSelectedPoet(poet);
  };

  return (
    <section id="poets" className="py-16 md:py-24 border-b border-[#2d2822] bg-[#0f0e0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c99a5b] font-medium">
            Личности и творцы
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5ebd9] mt-2 mb-4">
            «Орден имажинистов»: Главные поэты
          </h2>
          <p className="text-sm sm:text-base text-[#bfb29f]">
            Движение объединило ярчайших индивидуальностей Серебряного века. Каждый привнёс
            в эстетику образа собственную грань: от есенинского крестьянского космизма
            до городского дендизма Мариенгофа и европейского верлибра Шершеневича.
          </p>
        </div>

        {/* Poet Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {POETS_LIST.map((poet) => (
            <button
              key={poet.id}
              onClick={() => handleSelectPoet(poet)}
              className={`p-3 text-left rounded border transition-all flex items-center gap-3 ${
                selectedPoet.id === poet.id
                  ? 'bg-[#221c15] border-[#c99a5b] text-[#f5ebd9] shadow-md'
                  : 'bg-[#15120f] border-[#2d2822] text-[#8c8070] hover:text-[#d1c5b4] hover:border-[#3d362c]'
              }`}
            >
              <img
                src={poet.image}
                alt={poet.name}
                className="w-12 h-14 object-cover rounded filter grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="overflow-hidden">
                <span className="block font-serif font-semibold text-sm sm:text-base truncate">
                  {poet.name}
                </span>
                <span className="block text-[11px] text-[#a39786] font-mono">
                  {poet.years}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Poet Detailed Master Card */}
        <div className="bg-[#14120f] border border-[#3b342a] rounded-lg p-6 sm:p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Portrait and Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded overflow-hidden border border-[#3d362c] shadow-lg bg-black">
                <img
                  src={selectedPoet.image}
                  alt={selectedPoet.name}
                  className="w-full h-80 object-cover object-top filter contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-[#c99a5b] font-medium">
                    {selectedPoet.role}
                  </div>
                </div>
              </div>

              {/* Famous Quote */}
              <div className="p-4 rounded bg-[#1a1713] border border-[#2d2822] text-xs font-serif italic text-[#e6dab8] leading-relaxed">
                {selectedPoet.famousQuote}
              </div>

              {/* Key Works */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a39786] font-semibold block mb-2">
                  Ключевые произведения:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPoet.keyWorks.map((work, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#1f1b16] border border-[#2d2822] text-xs text-[#d1c5b4]"
                    >
                      {work}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Literary Role & Sample Poem with Trope Analysis */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#c99a5b] font-mono mb-1">
                  <span>{selectedPoet.years}</span>
                  <span aria-hidden="true">·</span>
                  <span>Орден имажинистов</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5ebd9]">
                  {selectedPoet.name}
                </h3>
                <p className="text-sm text-[#bfb29f] mt-2 leading-relaxed">
                  {selectedPoet.bio}
                </p>
              </div>

              <div className="p-4 rounded bg-[#181512] border border-[#2d2822] text-xs text-[#a39786] space-y-1">
                <span className="text-[#e8c382] font-semibold block">
                  Вклад в имажинизм и эволюция:
                </span>
                <p className="leading-relaxed text-[#b5a999]">
                  {selectedPoet.relationToImaginism}
                </p>
              </div>

              {/* Sample Poem Box */}
              <div className="p-5 rounded bg-[#110f0d] border border-[#2d2822] space-y-3">
                <div className="flex items-center justify-between border-b border-[#221e1a] pb-3">
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-[#c99a5b]" />
                    <span className="font-serif font-semibold text-sm text-[#f5ebd9]">
                      {selectedPoet.samplePoem.title} ({selectedPoet.samplePoem.year})
                    </span>
                  </div>

                  {/* Audio Recitation Button */}
                  <button
                    onClick={() => handleRecite(selectedPoet.samplePoem.text)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition-all ${
                      isReciting
                        ? 'bg-red-950 text-red-300 border border-red-800'
                        : 'bg-[#221c15] text-[#c99a5b] hover:bg-[#2e261d] border border-[#3d3428]'
                    }`}
                  >
                    {isReciting ? (
                      <>
                        <Square className="w-3.5 h-3.5 fill-current" />
                        <span>Остановить декламацию</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Слушать декламацию</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="font-serif italic text-sm sm:text-base text-[#e8c382] leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-[#3d3428]">
                  {selectedPoet.samplePoem.text}
                </pre>

                {/* Literary Analysis Box */}
                <div className="mt-4 pt-3 border-t border-[#221e1a] text-xs text-[#a39786] flex gap-2">
                  <Sparkles className="w-4 h-4 text-[#c99a5b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#e8c382] font-semibold">Анализ поэтики: </span>
                    <span className="text-[#b5a999]">{selectedPoet.samplePoem.analysis}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Circle of the Order */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-[#a39786] font-semibold mb-4">
            Другие участники, теоретики и художники ордена:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_FIGURES.map((figure, idx) => (
              <div
                key={idx}
                className="p-4 rounded bg-[#14120f] border border-[#2d2822] hover:border-[#3d3428] transition-colors"
              >
                <div className="font-serif font-semibold text-sm text-[#f5ebd9] mb-1">
                  {figure.name}
                </div>
                <div className="text-[11px] font-mono text-[#c99a5b] mb-2">
                  {figure.role}
                </div>
                <p className="text-xs text-[#8c8070] leading-relaxed">
                  {figure.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
