import React, { useState } from 'react';
import { PEGASUS_STALL_STORIES, IMAGES } from '../data/imaginismData';
import { Coffee, Flame, Music, History } from 'lucide-react';
import { cabaretAudio } from '../utils/audioSynthesizer';

const HISTORICAL_MENU_ITEMS = [
  {
    name: '«Морковный чай с сахарином»',
    price: '50 000 совзнаков',
    note: 'Главный напиток голодной Москвы 1920 года. Подавался в жестяных кружках с эпиграммой на блюдце.'
  },
  {
    name: '«Поэтическая порция Есенина»',
    price: '100 000 совзнаков',
    note: 'Ржаная краюха с солью и чтение поэмы «Пугачёв» лично автором с эстрады.'
  },
  {
    name: '«Коктейль Мариенгофа»',
    price: 'Бесценно',
    note: 'Стакан кипятка, щепотка цинизма и стихи на салфетке: «Тверская жует пролетки».'
  },
  {
    name: '«Входной билет для фармацевтов»',
    price: 'Тройной тариф',
    note: '«Фармацевтами» богема пренебрежительно звала буржуев и зевак, финансировавших поэтов.'
  }
];

export const PegasusStallCabaret: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(cabaretAudio.getStatus());

  const handleToggleAudio = () => {
    const active = cabaretAudio.toggle();
    setIsAudioActive(active);
  };

  return (
    <section id="cabaret" className="py-16 md:py-24 border-b border-[#2d2822] bg-[#12100d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#c99a5b] font-medium">
              Богемная среда & Литературный быт
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5ebd9] mt-2 mb-3">
              Кафе «Стойло Пегаса» и скандальный эпатаж
            </h2>
            <p className="text-sm sm:text-base text-[#bfb29f]">
              Почему имажинизм неразрывно связан с литературными кафе, переименованием улиц
              и ночными вылазками? В эпоху военного коммунизма скандал и живое кафе были
              единственным способом пробить информационную стену и спасти поэзию от голодной смерти.
            </p>
          </div>

          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-md ${
              isAudioActive
                ? 'bg-[#c99a5b] text-black ring-1 ring-[#c99a5b]'
                : 'bg-[#221c15] text-[#e8c382] border border-[#3d3428] hover:bg-[#2c241b]'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>{isAudioActive ? 'Заглушить рояль кабаре' : 'Оживить рояль кабаре (звук)'}</span>
          </button>
        </div>

        {/* 2-Column: Left Stories / Right Visual and Historic Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Interactive Story Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#a39786] uppercase tracking-wider mb-2">
              <History className="w-4 h-4 text-[#c99a5b]" />
              <span>Хроника знаменитых акций и жизни ордена:</span>
            </div>

            <div className="space-y-3">
              {PEGASUS_STALL_STORIES.map((story, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`p-5 rounded-lg border cursor-pointer transition-all ${
                    activeStoryIdx === idx
                      ? 'bg-[#1b1713] border-[#c99a5b] shadow-md'
                      : 'bg-[#14120f] border-[#2d2822] hover:border-[#3d362c] text-[#a39786]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-[#c99a5b] font-semibold">
                      {story.date}
                    </span>
                    <span className="text-[11px] text-[#8c8070] uppercase">
                      Акция {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#f5ebd9] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b5a999] leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual of Avant-Garde Action & Authentic Menu */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg overflow-hidden border border-[#3b342a] bg-[#14120f] shadow-xl">
              <img
                src={IMAGES.avantgardeAction}
                alt="Поэты-имажинисты на ночной акции росписи стен Страстного монастыря"
                className="w-full h-64 object-cover filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#161310] border-t border-[#2d2822]">
                <div className="flex items-center gap-1.5 text-xs text-[#c99a5b] font-semibold uppercase tracking-wider mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Ночь на Страстной площади (1919)</span>
                </div>
                <p className="text-xs text-[#b5a999] leading-relaxed">
                  Поэты вывели на древних стенах монастыря: <em className="text-[#f5ebd9]">«Граждане, меняйте белье корявых душ!»</em> и <em className="text-[#f5ebd9]">«Господи, отелись!»</em>.
                  Этот эпатажный жест мгновенно превратил имажинистов в главных возмутителей спокойствия Москвы.
                </p>
              </div>
            </div>

            {/* Menu of Pegasus Stall */}
            <div className="p-5 rounded-lg bg-[#15120f] border border-[#2d2822]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2d2822]">
                <Coffee className="w-4 h-4 text-[#c99a5b]" />
                <h4 className="font-serif font-bold text-sm text-[#f5ebd9]">
                  Прейскурант «Стойла Пегаса» (Тверская, 37)
                </h4>
              </div>

              <div className="space-y-3">
                {HISTORICAL_MENU_ITEMS.map((item, i) => (
                  <div key={i} className="text-xs border-b border-[#221e1a] pb-2 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center text-[#e8c382] font-serif font-semibold">
                      <span>{item.name}</span>
                      <span className="font-mono text-[10px] text-[#a39786]">{item.price}</span>
                    </div>
                    <p className="text-[11px] text-[#8c8070] mt-0.5">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Theoretical Takeaway for the Lesson */}
        <div className="p-5 rounded-lg bg-[#181410] border-l-4 border-[#c99a5b] border border-[#2d2822] text-xs sm:text-sm text-[#b5a999] leading-relaxed">
          <span className="text-[#e8c382] font-semibold block mb-1">
            Ключевой вывод для ответа на уроке (Карточка 4, вопрос 6):
          </span>
          Эпатаж и литературные кафе не были пустой блажью. В условиях разрухи Гражданской войны
          традиционные издательства не работали, а газеты заполняла пропаганда.
          Открыв «Стойло Пегаса», имажинисты создали независимую трибуну, где продавали книги,
          кормились, вступали в яростные диспуты с Маяковским и футуристами и делали поэзию
          активным участником городской жизни.
        </div>
      </div>
    </section>
  );
};
