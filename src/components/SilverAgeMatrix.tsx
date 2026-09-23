import React, { useState } from 'react';
import { COMPARISON_CRITERIA_ROWS } from '../data/imaginismData';
import { Copy, Check, Sparkles, Orbit, Table } from 'lucide-react';

interface MovementEssence {
  id: string;
  name: string;
  groupTag?: string;
  coreConcept: string;
  motto: string;
  essenceRole: string;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  textColor: string;
  metrics: {
    label: string;
    value: number; // percentage
  }[];
  keyVector: string;
}

const ESSENCE_DATA: MovementEssence[] = [
  {
    id: 'symbolism',
    name: '1. Символизм',
    coreConcept: 'ТАЙНА И ДУХ',
    motto: '«От реального к реальнейшему»',
    essenceRole: 'Смысл запредельный',
    accentColor: '#9d8ba7',
    borderColor: 'border-[#9d8ba7]/30',
    bgGlow: 'hover:border-[#9d8ba7]/60 hover:shadow-[#9d8ba7]/10',
    textColor: 'text-[#d6c7df]',
    metrics: [
      { label: 'Самоценность образа', value: 55 },
      { label: 'Мистический скрытый смысл', value: 95 },
      { label: 'Привязка к земным вещам', value: 20 },
    ],
    keyVector: 'Слово как шифр и заклинание в мир высших идей.'
  },
  {
    id: 'acmeism',
    name: '2. Акмеизм',
    coreConcept: 'ВЕЩЬ И РАВНОВЕСИЕ',
    motto: '«Тоска по мировой культуре»',
    essenceRole: 'Смысл земной',
    accentColor: '#b89f82',
    borderColor: 'border-[#b89f82]/30',
    bgGlow: 'hover:border-[#b89f82]/60 hover:shadow-[#b89f82]/10',
    textColor: 'text-[#e8dac7]',
    metrics: [
      { label: 'Самоценность образа', value: 50 },
      { label: 'Мистический скрытый смысл', value: 15 },
      { label: 'Привязка к земным вещам', value: 95 },
    ],
    keyVector: 'Слово как точный, осязаемый камень собора.'
  },
  {
    id: 'imaginism',
    name: '3. Имажинизм',
    groupTag: 'Группа №3 · Наша тема',
    coreConcept: 'ЧИСТЫЙ ОБРАЗ',
    motto: '«Победа образа над смыслом! 2×2=5»',
    essenceRole: 'Образ превыше смысла',
    accentColor: '#e8c382',
    borderColor: 'border-[#c99a5b] ring-1 ring-[#c99a5b]/40',
    bgGlow: 'bg-[#1c1610] shadow-lg shadow-[#c99a5b]/10',
    textColor: 'text-[#f5ebd9]',
    metrics: [
      { label: 'Самоценность образа', value: 100 },
      { label: 'Мистический скрытый смысл', value: 10 },
      { label: 'Привязка к земным вещам', value: 75 },
    ],
    keyVector: 'Словесный образ — абсолютная самоцель, сжигающая сюжет.'
  },
  {
    id: 'futurism',
    name: '4. Футуризм',
    coreConcept: 'БУНТ И СКОРОСТЬ',
    motto: '«Сбросить классиков с Парохода!»',
    essenceRole: 'Смысл революционный',
    accentColor: '#b88080',
    borderColor: 'border-[#b88080]/30',
    bgGlow: 'hover:border-[#b88080]/60 hover:shadow-[#b88080]/10',
    textColor: 'text-[#f0cbcb]',
    metrics: [
      { label: 'Самоценность образа', value: 45 },
      { label: 'Мистический скрытый смысл', value: 5 },
      { label: 'Привязка к земным вещам', value: 85 },
    ],
    keyVector: 'Слово как заумный снаряд и митинговый рупор.'
  }
];

export const SilverAgeMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'table'>('diagram');
  const [copied, setCopied] = useState<boolean>(false);
  const [activeMovementId, setActiveMovementId] = useState<string>('imaginism');

  const handleCopyTable = () => {
    let text = 'СРАВНЕНИЕ СУТИ 4 ТЕЧЕНИЙ СЕРЕБРЯНОГО ВЕКА\n\n';
    ESSENCE_DATA.forEach((e) => {
      text += `[${e.name.toUpperCase()}]\n`;
      text += `• Суть: ${e.coreConcept} (${e.essenceRole})\n`;
      text += `• Девиз: ${e.motto}\n`;
      text += `• Вектор: ${e.keyVector}\n\n`;
    });

    text += '=== ПОЛНАЯ ТАБЛИЦА КРИТЕРИЕВ ===\n\n';
    COMPARISON_CRITERIA_ROWS.forEach((r, idx) => {
      text += `${idx + 1}. ${r.label.toUpperCase()}\n`;
      text += `• Символизм: ${r.symbolism}\n`;
      text += `• Акмеизм: ${r.acmeism}\n`;
      text += `• Имажинизм (Группа №3): ${r.imaginism}\n`;
      text += `• Футуризм: ${r.futurism}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="matrix" className="py-20 border-b border-[#231f1a] bg-[#0f0e0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#231f1a] mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#c99a5b]">
              Сравнительный анализ · Серебряный век
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#f5ebd9] mt-1.5 tracking-tight">
              Сравнение сути 4-х поэтических течений
            </h2>
            <p className="text-xs sm:text-sm text-[#8c8070] mt-1 max-w-2xl">
              Наглядная оценка главного поэтического ядра: что каждое направление ставит во главу угла.
            </p>
          </div>

          {/* Action buttons & Minimal tab switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center p-1 rounded-md bg-[#161310] border border-[#2b241c]">
              <button
                onClick={() => setActiveTab('diagram')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-all ${
                  activeTab === 'diagram'
                    ? 'bg-[#c99a5b] text-black font-semibold shadow-sm'
                    : 'text-[#9c8e7e] hover:text-[#f5ebd9]'
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>Диаграмма сути (4 круга)</span>
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-all ${
                  activeTab === 'table'
                    ? 'bg-[#c99a5b] text-black font-semibold shadow-sm'
                    : 'text-[#9c8e7e] hover:text-[#f5ebd9]'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Таблица критериев</span>
              </button>
            </div>

            <button
              onClick={handleCopyTable}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-[#a39786] hover:text-[#e8c382] border border-[#2d2822] hover:border-[#4d4032] transition-colors"
              title="Скопировать данные в буфер обмена"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Копировать</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* VIEW 1: MINIMALIST ESSENCE DIAGRAM (4 CIRCLES / ORBS) */}
        {activeTab === 'diagram' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Visual 4-Circles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ESSENCE_DATA.map((item) => {
                const isSelected = activeMovementId === item.id;
                const isImaginism = item.id === 'imaginism';

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveMovementId(item.id)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                      item.borderColor
                    } ${
                      isSelected
                        ? `${item.bgGlow} scale-[1.02] shadow-xl`
                        : 'bg-[#12100e] hover:bg-[#161310] border-[#262019]'
                    }`}
                  >
                    {/* Top Group Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-medium text-[#8c8070]">
                        {item.name}
                      </span>
                      {item.groupTag && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#c99a5b] text-black font-bold uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{item.groupTag}</span>
                        </span>
                      )}
                    </div>

                    {/* Central Orb / Circular Essence Core */}
                    <div className="my-3 flex flex-col items-center text-center">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        {/* Outer concentric decorative ring */}
                        <div
                          className="absolute inset-0 rounded-full border border-dashed opacity-40 animate-[spin_24s_linear_infinite]"
                          style={{ borderColor: item.accentColor }}
                        />
                        {/* Inner glowing circle */}
                        <div
                          className={`w-20 h-20 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-inner border transition-all ${
                            isImaginism
                              ? 'bg-gradient-to-b from-[#2a2015] to-[#1a140d] border-[#c99a5b] shadow-[#c99a5b]/20 shadow-md'
                              : 'bg-[#171411] border-[#383025]'
                          }`}
                        >
                          <span
                            className="text-[10px] font-mono tracking-wider uppercase font-bold"
                            style={{ color: item.accentColor }}
                          >
                            {item.coreConcept}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span className="text-xs font-serif italic text-[#c4b6a3]">
                          {item.motto}
                        </span>
                      </div>
                    </div>

                    {/* Essence Role / Vector */}
                    <div className="mt-3 pt-3 border-t border-[#231e18] space-y-3">
                      <div className="text-[11px] text-[#9c8e7d] leading-relaxed">
                        <strong className="text-neutral-200 block text-xs mb-0.5">Суть течения:</strong>
                        {item.keyVector}
                      </div>

                      {/* 3 Comparative Metrics (Essence Evaluation) */}
                      <div className="space-y-2 pt-2">
                        {item.metrics.map((m, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[11px] text-[#7d7263]">
                              <span>{m.label}</span>
                              <span className="font-mono text-[#a39786]">{m.value}%</span>
                            </div>
                            <div className="h-1 w-full bg-[#1e1914] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${m.value}%`,
                                  backgroundColor: item.accentColor
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Essence Summary Card */}
            <div className="p-5 rounded-xl bg-[#14110e] border border-[#2b241c] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#a39786]">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#c99a5b] tracking-wider font-semibold">
                  ★ Главный вывод для урока:
                </span>
                <p className="text-sm text-[#e8dac7] font-serif leading-relaxed">
                  Символисты искали <em>смысл мистический</em>, акмеисты — <em>смысл земной</em>, футуристы — <em>смысл бунтарский</em>. 
                  И лишь <strong>Имажинизм (Группа №3)</strong> провозгласил: <em>«Образ важнее всякого смысла!» (2 × 2 = 5)</em>.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('table')}
                className="shrink-0 text-xs text-[#c99a5b] hover:text-[#f4d9a6] underline font-medium"
              >
                Посмотреть подробную таблицу (10 критериев) →
              </button>
            </div>

          </div>
        )}

        {/* VIEW 2: MINIMALIST TABLE */}
        {activeTab === 'table' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="overflow-x-auto rounded-lg border border-[#231f1a] bg-[#12100e]">
              <table className="w-full text-left border-collapse min-w-[860px]">
                <thead>
                  <tr className="border-b border-[#231f1a] bg-[#161310] text-xs">
                    <th className="py-4 px-5 w-[180px] font-mono text-[11px] text-[#73685a] uppercase tracking-wider">
                      Критерий
                    </th>
                    <th className="py-4 px-5 w-[220px] font-serif text-sm font-semibold text-[#c7beaf]">
                      1. Символизм
                    </th>
                    <th className="py-4 px-5 w-[220px] font-serif text-sm font-semibold text-[#c7beaf]">
                      2. Акмеизм
                    </th>
                    <th className="py-4 px-5 w-[240px] font-serif text-sm font-semibold text-[#e8c382] bg-[#1c1610] border-x border-[#2d2318]">
                      <div className="flex items-center justify-between">
                        <span>3. Имажинизм</span>
                        <span className="text-[10px] font-mono font-normal text-[#c99a5b] uppercase">Группа №3</span>
                      </div>
                    </th>
                    <th className="py-4 px-5 w-[220px] font-serif text-sm font-semibold text-[#c7beaf]">
                      4. Футуризм
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#1e1a15] text-xs sm:text-[13px] leading-relaxed">
                  {COMPARISON_CRITERIA_ROWS.map((row) => (
                    <tr key={row.id} className="hover:bg-[#161310]/50 transition-colors">
                      {/* Criteria Name */}
                      <td className="py-4 px-5 text-[#8c8070] align-top font-medium">
                        <span className="text-neutral-300 font-serif font-medium block text-sm">
                          {row.label}
                        </span>
                        <span className="text-[11px] text-[#6b6153] mt-0.5 block">
                          {row.description}
                        </span>
                      </td>

                      {/* 1. Symbolism */}
                      <td className="py-4 px-5 text-[#b0a594] align-top">
                        {row.symbolism}
                      </td>

                      {/* 2. Acmeism */}
                      <td className="py-4 px-5 text-[#b0a594] align-top">
                        {row.acmeism}
                      </td>

                      {/* 3. Imaginism (Subtle Warm Highlight) */}
                      <td className="py-4 px-5 text-[#f0e3cc] align-top bg-[#1a140e]/60 border-x border-[#2b2116]">
                        <div className="space-y-1.5">
                          <div>{row.imaginism}</div>
                          {row.highlightDifference && (
                            <div className="text-[11px] text-[#c99a5b] font-serif italic pt-1 border-t border-[#2d2215]/80">
                              {row.highlightDifference}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* 4. Futurism */}
                      <td className="py-4 px-5 text-[#b0a594] align-top">
                        {row.futurism}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#635a4e] pt-2">
              <span>Символизм (1890–1910-е) · Акмеизм (1912–1920-е) · Имажинизм (1919–1924) · Футуризм (1910–1920-е)</span>
              <button
                onClick={() => setActiveTab('diagram')}
                className="text-[#c99a5b] hover:text-[#f4d9a6] underline self-start sm:self-auto"
              >
                Вернуться к диаграмме сути 4-х кругов ↑
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
