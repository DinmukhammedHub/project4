import React, { useState } from 'react';
import { Sparkles, Layers, Eye, RefreshCw, Feather } from 'lucide-react';

const MANIFESTO_CLAUSES = [
  {
    number: '01',
    title: 'Победа образа над смыслом',
    quote: '«Скончался младенец, горластый парень десяти лет от роду (родился 1909 года — умер 1919). Умер футуризм. Мы объявляем эру имажинизма!»',
    explanation: 'Имажинисты хоронили футуризм за то, что тот выродился в партийную плакатную агитацию и бессмысленную заумь. Истинное спасение поэзии — возвращение к первородной свежести образа.'
  },
  {
    number: '02',
    title: 'Смысл — лишь кокон бабочки',
    quote: '«Всякое содержание в художественном произведении столь же глупо и бессмысленно, как наклейки из газет на картины. Образ — цель, мысль — лишь средство к нему».',
    explanation: 'В поэтическом тексте мысль не должна быть нравоучением. Она — лишь строительные леса, которые исчезают, когда зажигается яркая метафора.'
  },
  {
    number: '03',
    title: 'Стихотворение — толпа образов, а не организм',
    quote: '«Из стихотворения без всякого ущерба для целого можно вынуть один образ или вставить десяток новых. Стихотворение — не организм, а картинная галерея».',
    explanation: 'Анатолий Мариенгоф и Вадим Шершеневич формулировали «принцип каталога»: цепочка самоценных картин, не связанных линейным сюжетом.'
  },
  {
    number: '04',
    title: 'Закон обратимости (чтение задом наперед)',
    quote: '«Идеальное стихотворение имажиниста должно читаться от последней строчки к первой с тем же эстетическим наслаждением, что и от первой к последней».',
    explanation: 'Поскольку образы не скованы хронологией событий, последовательность строк подчинена не логике рассказа, а полифонии эмоциональных вспышек.'
  }
];

export const EssenceSection: React.FC = () => {
  const [activeClause, setActiveClause] = useState(0);

  return (
    <section id="essence" className="py-16 md:py-24 border-b border-[#2d2822] bg-[#12100d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c99a5b] font-medium">
            Философия & Эстетическая программа
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5ebd9] mt-2 mb-4">
            Основная идея и поэтика Имажинизма
          </h2>
          <p className="text-sm sm:text-base text-[#bfb29f] leading-relaxed">
            Термин происходит от английского и французского <em className="text-[#e8c382]">image</em> («образ»). 
            Для имажинистов образ — не вспомогательное украшение стиха, а его единственный 
            структурный первоэлемент и самоцель.
          </p>
        </div>

        {/* 4 Pillars of Imaginism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-5 rounded bg-[#181512] border border-[#2d2822] hover:border-[#c99a5b]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#2a241c] flex items-center justify-center text-[#c99a5b] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#f5ebd9] mb-2">1. Самоценность образа</h3>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Образ («имаж») освобождается от служения быту, политике и морализаторству. Поэзия возвращается к чистому искусству словесного видения.
            </p>
          </div>

          <div className="p-5 rounded bg-[#181512] border border-[#2d2822] hover:border-[#c99a5b]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#2a241c] flex items-center justify-center text-[#c99a5b] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#f5ebd9] mb-2">2. Метафорические цепи</h3>
            <p className="text-xs text-[#a39786] leading-relaxed">
              «Ступенчатый образ» — нанизывание тропов, где каждая последующая метафора рождается из вспышки предыдущей («грабли костей», «кобыльи корабли»).
            </p>
          </div>

          <div className="p-5 rounded bg-[#181512] border border-[#2d2822] hover:border-[#c99a5b]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#2a241c] flex items-center justify-center text-[#c99a5b] mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#f5ebd9] mb-2">3. Остранение и шок</h3>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Смещение привычного: высокое соединяется с физиологией и уличной грубостью. Улица «жует пролетки», а тучи уподобляются распоротому брюху.
            </p>
          </div>

          <div className="p-5 rounded bg-[#181512] border border-[#2d2822] hover:border-[#c99a5b]/40 transition-colors">
            <div className="w-9 h-9 rounded bg-[#2a241c] flex items-center justify-center text-[#c99a5b] mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#f5ebd9] mb-2">4. Бунт против сюжета</h3>
            <p className="text-xs text-[#a39786] leading-relaxed">
              Отказ от нарратива: стихотворение не пересказывает событие, а конструирует автономное пространство, которое можно осматривать в любом порядке.
            </p>
          </div>
        </div>

        {/* Interactive Manifesto 1919 Explorer */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#161310] border border-[#3b342a] relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2d2822]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#c99a5b]/10 text-[#c99a5b] flex items-center justify-center">
                <Feather className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#f5ebd9]">
                  «Декларация имажинистов» (Москва / Воронеж, 1919)
                </h3>
                <p className="text-xs text-[#8c8070]">
                  Интерактивный разбор положений первого манифеста ордена
                </p>
              </div>
            </div>
            <div className="text-xs text-[#c99a5b] font-mono">
              Подписали: Есенин, Мариенгоф, Шершеневич, Ивнев
            </div>
          </div>

          {/* Interactive Clause Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {MANIFESTO_CLAUSES.map((clause, idx) => (
              <button
                key={clause.number}
                onClick={() => setActiveClause(idx)}
                className={`p-3 text-left rounded border transition-all text-xs ${
                  activeClause === idx
                    ? 'bg-[#2a231a] border-[#c99a5b] text-[#f5ebd9] shadow-sm'
                    : 'bg-[#12100e] border-[#2d2822] text-[#8c8070] hover:text-[#d1c5b4] hover:border-[#3d362c]'
                }`}
              >
                <span className="block font-mono text-[10px] text-[#c99a5b] mb-1">
                  Тезис {clause.number}
                </span>
                <span className="font-semibold line-clamp-1">{clause.title}</span>
              </button>
            ))}
          </div>

          {/* Active Clause Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#100e0c] p-6 rounded border border-[#2d2822]">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#c99a5b]">
                Цитата из манифеста 1919 года
              </div>
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#f5ebd9] leading-snug border-l-2 border-[#c99a5b] pl-4 py-1">
                {MANIFESTO_CLAUSES[activeClause].quote}
              </blockquote>
            </div>
            <div className="lg:col-span-5 bg-[#181512] p-4 rounded border border-[#2d2822] space-y-2">
              <div className="text-xs font-semibold text-[#e8c382] uppercase tracking-wider">
                Теоретический комментарий для ответа у доски
              </div>
              <p className="text-xs sm:text-sm text-[#b5a999] leading-relaxed">
                {MANIFESTO_CLAUSES[activeClause].explanation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
