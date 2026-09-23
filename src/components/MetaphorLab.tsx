import React, { useState } from 'react';
import { METAPHOR_PARTS } from '../data/imaginismData';
import { Sparkles, Copy, Check, Wand2, SplitSquareVertical } from 'lucide-react';

const REAL_COMPARISONS = [
  {
    theme: 'Образ Луны',
    classic: '«Луна, как бледное пятно, сквозь тучи мрачные желтела...» (А. С. Пушкин)',
    classicDesc: 'Классическое сходство по внешнему признаку (круглая, бледная, освещает тучи).',
    imaginist: '«Месяц — как рыжий жеребенок, запрягся в наши сани...» (С. Есенин)',
    imaginistDesc: 'Имажинистское остранение: сопоставление небесного светила с живым деревенским жеребенком, передающее цвет, движение и тепло.'
  },
  {
    theme: 'Образ Города и Улицы',
    classic: '«Город пышный, город бедный, дух неволи, стройный вид...» (А. С. Пушкин)',
    classicDesc: 'Антитеза и социальная характеристика Санкт-Петербурга.',
    imaginist: '«Тверская, как слюнявая старуха, жует извозчичьи пролетки...» (А. Мариенгоф)',
    imaginistDesc: 'Шоковая физиологическая метафора: колеса пролеток уподоблены челюстям беззубого рта города.'
  },
  {
    theme: 'Образ Мысли и Слова',
    classic: '«И мысль моя, как легкий дым, в просторе тает...» (Ф. Тютчев)',
    classicDesc: 'Элегическое романтическое сравнение с неосязаемым дымом.',
    imaginist: '«Мы плюемся мыслями, как вишневыми косточками...» (А. Мариенгоф)',
    imaginistDesc: 'Дерзкое бытовое заземление: духовное действие приравнено к плевку косточкой.'
  }
];

export const MetaphorLab: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState(METAPHOR_PARTS.subjects[0].value);
  const [selectedSphereIdx, setSelectedSphereIdx] = useState(0);
  const [variantIdx, setVariantIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSphere = METAPHOR_PARTS.spheres[selectedSphereIdx];
  const generatedVariant = currentSphere.variants[variantIdx % currentSphere.variants.length];
  const fullPoeticLine = `«${selectedSubject} — это ${generatedVariant}»`;

  const handleNextVariant = () => {
    setVariantIdx((prev) => (prev + 1) % currentSphere.variants.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPoeticLine);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="metaphors" className="py-16 md:py-24 border-b border-[#2d2822] bg-[#0f0e0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c99a5b] font-medium">
            Творческая лаборатория
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5ebd9] mt-2 mb-4">
            Анатомия имажинистской метафоры
          </h2>
          <p className="text-sm sm:text-base text-[#bfb29f]">
            «Образ — это вдевание одного предмета в другой через сходство самых неожиданных признаков».
            Исследуйте, чем дерзкая метафора имажинистов отличалась от классической поэзии,
            и сконструируйте собственную поэтическую строку.
          </p>
        </div>

        {/* 1. Comparison: Classic vs. Imaginist */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a39786] font-semibold mb-4">
            <SplitSquareVertical className="w-4 h-4 text-[#c99a5b]" />
            <span>Классическая традиция vs. Имажинистский бунт</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_COMPARISONS.map((comp, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#14120f] border border-[#2d2822] space-y-4">
                <div className="text-xs font-mono text-[#c99a5b] font-semibold uppercase">
                  {comp.theme}
                </div>

                {/* Classic */}
                <div className="p-3 rounded bg-[#100e0c] border border-[#221e19] text-xs space-y-1">
                  <span className="text-[10px] text-[#8c8070] uppercase tracking-wider font-semibold block">
                    Классическая поэзия:
                  </span>
                  <p className="font-serif italic text-[#c4b8a5]">{comp.classic}</p>
                  <p className="text-[11px] text-[#786e60] mt-1">{comp.classicDesc}</p>
                </div>

                {/* Imaginist */}
                <div className="p-3 rounded bg-[#1c1712] border border-[#c99a5b]/30 text-xs space-y-1">
                  <span className="text-[10px] text-[#c99a5b] uppercase tracking-wider font-semibold block">
                    Имажинистский троп:
                  </span>
                  <p className="font-serif italic text-[#f4d9a6] font-semibold">{comp.imaginist}</p>
                  <p className="text-[11px] text-[#b5a999] mt-1">{comp.imaginistDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Metaphor Generator */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#161310] border border-[#3d3428] relative">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-[#c99a5b] text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Интерактивный генератор образов</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f5ebd9]">
              Соберите имажинистскую строку в духе 1920 года
            </h3>
            <p className="text-xs text-[#a39786] mt-1">
              Выберите предмет и стилистический полюс, чтобы соединить несоединимое по формуле 2×2=5.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-5">
              {/* Step 1: Select Subject */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a39786] font-semibold mb-2">
                  1. Исходный предмет (что сравниваем):
                </label>
                <div className="flex flex-wrap gap-2">
                  {METAPHOR_PARTS.subjects.map((subj) => (
                    <button
                      key={subj.value}
                      onClick={() => setSelectedSubject(subj.value)}
                      className={`px-3 py-1.5 rounded text-xs transition-colors ${
                        selectedSubject === subj.value
                          ? 'bg-[#c99a5b] text-black font-semibold'
                          : 'bg-[#1e1a15] text-[#b5a999] hover:text-white border border-[#2d2822]'
                      }`}
                    >
                      {subj.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Stylistic Sphere */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a39786] font-semibold mb-2">
                  2. Школа сравнения:
                </label>
                <div className="flex flex-col gap-2">
                  {METAPHOR_PARTS.spheres.map((sphere, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedSphereIdx(idx);
                        setVariantIdx(0);
                      }}
                      className={`p-2.5 rounded text-xs text-left transition-all ${
                        selectedSphereIdx === idx
                          ? 'bg-[#261f17] border border-[#c99a5b] text-[#f5ebd9]'
                          : 'bg-[#1a1612] border border-[#2d2822] text-[#8c8070] hover:text-[#d1c5b4]'
                      }`}
                    >
                      <span className="font-semibold block">{sphere.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleNextVariant}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#2b2217] hover:bg-[#382d1f] text-[#e8c382] border border-[#c99a5b]/40 text-xs font-semibold transition-colors"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Сгенерировать другой образ</span>
                </button>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-lg bg-[#110f0d] border border-[#3b342a] shadow-inner space-y-4">
                <div className="flex items-center justify-between text-xs text-[#a39786] border-b border-[#221e1a] pb-2">
                  <span className="uppercase tracking-wider font-mono">Синтезированная строка:</span>
                  <span className="text-[#c99a5b] font-medium">{currentSphere.name.split(' ')[0]}</span>
                </div>

                <div className="min-h-24 flex items-center justify-center text-center px-4">
                  <p className="font-serif italic text-xl sm:text-2xl text-[#f4d9a6] leading-snug">
                    {fullPoeticLine}
                  </p>
                </div>

                <div className="border-t border-[#221e1a] pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#8c8070]">
                    Принцип: столкновение двух далёких понятий рождает новый смысл
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#1f1a14] hover:bg-[#2c241c] text-[#e8c382] border border-[#3d3428] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#c99a5b]" />
                        <span>Копировать</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
