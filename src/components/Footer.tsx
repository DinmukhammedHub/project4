import React from 'react';
import { Feather } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0a09] border-t border-[#241e18] py-12 text-[#8c8070] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#1c1813] pb-8">
          <div>
            <div className="flex items-center gap-2 text-base font-serif font-bold text-[#e8c382]">
              <Feather className="w-4 h-4 text-[#c99a5b]" />
              <span>Имажинизм · Поэтическое течение Серебряного века</span>
            </div>
            <p className="text-xs text-[#6e6355] mt-1 max-w-xl">
              Учебный проект по русской литературе. Создатели: Саттар Динмухаммед и его друзья (Группа №3).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#a39786]">
            <a href="#essence" className="hover:text-[#e8c382] transition-colors">
              Идея и манифест
            </a>
            <a href="#poets" className="hover:text-[#e8c382] transition-colors">
              Орден поэтов
            </a>
            <a href="#cabaret" className="hover:text-[#e8c382] transition-colors">
              «Стойло Пегаса»
            </a>
            <a href="#metaphors" className="hover:text-[#e8c382] transition-colors">
              Лаборатория
            </a>
            <a href="#matrix" className="hover:text-[#e8c382] transition-colors">
              Сравнительная таблица
            </a>
            <a href="#quiz" className="hover:text-[#e8c382] transition-colors">
              Викторина
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5e5447]">
          <div className="font-serif italic text-[#8c8070]">
            «Образ — это самоцель! Форма пожирает смысл» — Вадим Шершеневич, «2×2=5»
          </div>
          <div>
            Подготовлено для урока литературы · Создатели: Саттар Динмухаммед и его друзья (Группа №3)
          </div>
        </div>
      </div>
    </footer>
  );
};
