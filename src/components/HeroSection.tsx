import React from 'react';
import { IMAGES } from '../data/imaginismData';
import { BookOpen, Sparkles, Coffee, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#2d2822] overflow-hidden">
      {/* Background ambiance subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-[#c99a5b]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Institutional Operational Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 py-2 px-3 sm:px-4 mb-8 bg-[#181512] border border-[#2d2822] rounded text-xs text-[#a39786]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c99a5b] inline-block animate-ping" />
            <span className="text-[#e8c382] font-semibold">ГРУППА №3</span>
            <span aria-hidden="true">·</span>
            <span>Серебряный век русской литературы</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Москва, 1919–1924</span>
          </div>
          <div className="flex items-center gap-3 text-[#c99a5b]">
            <span>«Стойло Пегаса» на Тверской</span>
            <span aria-hidden="true">·</span>
            <span>Формула 2 × 2 = 5</span>
          </div>
        </div>

        {/* Main 2-column Marquee Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typographic Composition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#c99a5b] font-medium">
                Авангардная революция метафоры
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f5ebd9] leading-[1.1] tracking-tight">
                Имажинизм: <br />
                <span className="italic font-normal text-[#c99a5b]">Победа образа</span> над смыслом
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#bfb29f] leading-relaxed max-w-2xl font-light">
              В январе 1919 года среди холода и разрухи голодной Москвы Сергей Есенин, Анатолий Мариенгоф
              и Вадим Шершеневич провозгласили рождение нового поэтического ордена. Их манифест низвергал
              диктатуру сюжета: стихотворение объявлялось не логическим организмом, а фейерверком
              самодостаточных словесных картин — «образом как таковым».
            </p>

            {/* Pull Quote */}
            <div className="border-l-2 border-[#c99a5b] pl-4 py-1 italic font-serif text-lg text-[#e6dab8] bg-[#1a1713]/50 rounded-r">
              «Всякое содержание в художественном произведении столь же глупо, как наклейки из газет на картины.
              Единственный закон искусства — образ!»
              <span className="block text-xs not-italic font-sans text-[#a39786] mt-1 uppercase tracking-wider">
                — Из первой «Декларации имажинистов», 1919 г.
              </span>
            </div>

            {/* Quick Action Anchors */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#guide-cards"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#c99a5b] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#d8ab6e] transition-colors shadow-lg shadow-[#c99a5b]/10 whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4" />
                <span>Карточки-гиды для урока</span>
              </a>
              <a
                href="#poets"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#1f1b16] text-[#e8c382] border border-[#3b342a] font-medium text-xs uppercase tracking-wider hover:bg-[#2b251e] transition-colors whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#c99a5b]" />
                <span>Орден поэтов</span>
              </a>
              <a
                href="#cabaret"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#1f1b16] text-[#b5a999] border border-[#3b342a] font-medium text-xs uppercase tracking-wider hover:text-white hover:bg-[#2b251e] transition-colors whitespace-nowrap"
              >
                <Coffee className="w-4 h-4 text-[#c99a5b]" />
                <span>Кафе «Стойло Пегаса»</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg border border-[#3d3428] shadow-2xl bg-[#14120f]">
                <img
                  src={IMAGES.heroStall}
                  alt="Интерьер литературного кафе имажинистов Стойло Пегаса на Тверской, 1920-е годы"
                  className="w-full h-80 sm:h-96 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#14120f] border-t border-[#2d2822]">
                  <div className="flex items-center justify-between text-xs text-[#a39786] mb-1">
                    <span className="font-serif italic">Москва, Тверская улица, 37</span>
                    <span className="text-[#c99a5b] font-mono">1919–1924</span>
                  </div>
                  <p className="text-xs text-[#d1c5b4] leading-snug">
                    Литературное кафе «Стойло Пегаса» — колыбель имажинизма, где стихи писались на обоях,
                    а поэты вызывали публику на дуэль метафор.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Label */}
              <div className="absolute -top-3 -right-3 bg-[#c99a5b] text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                Орден Имажинистов
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Stats / Axioms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#2d2822]">
          <div className="p-4 rounded bg-[#161310] border border-[#2d2822]">
            <div className="flex items-center gap-2 text-[#c99a5b] text-xs font-semibold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Главная формула</span>
            </div>
            <div className="text-2xl font-serif text-[#f5ebd9] mb-1">2 × 2 = 5</div>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Поэтическое целое обязано давать не логическую сумму фактов, а эмоциональный сверхприрост через столкновение образов.
            </p>
          </div>

          <div className="p-4 rounded bg-[#161310] border border-[#2d2822]">
            <div className="flex items-center gap-2 text-[#c99a5b] text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Принцип каталога</span>
            </div>
            <div className="text-2xl font-serif text-[#f5ebd9] mb-1">Толпа образов</div>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Отказ от сквозного сюжета: идеальное стихотворение можно читать задом наперёд, не теряя драгоценного сияния метафор.
            </p>
          </div>

          <div className="p-4 rounded bg-[#161310] border border-[#2d2822]">
            <div className="flex items-center gap-2 text-[#c99a5b] text-xs font-semibold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Поэтика остранения</span>
            </div>
            <div className="text-2xl font-serif text-[#f5ebd9] mb-1">Шок и телесность</div>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Смелое сопоставление космического и бытового: «луна — рыжий жеребенок», «снег — белая кишка распоротых туч».
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
