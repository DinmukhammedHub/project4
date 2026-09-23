import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/imaginismData';
import { HelpCircle, Check, X, RotateCcw, Award } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];
  const userChoice = selectedAnswers[question.id];
  const isAnswered = userChoice !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [question.id]: optIdx }));
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  const correctCount = Object.entries(selectedAnswers).filter(
    ([qId, optIdx]) => {
      const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
      return q && q.correctIndex === optIdx;
    }
  ).length;

  return (
    <section id="quiz" className="py-16 md:py-24 border-b border-[#2d2822] bg-[#12100d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c99a5b] font-medium mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Интерактивная викторина для одноклассников</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f5ebd9] mb-3">
            Знаток Имажинизма
          </h2>
          <p className="text-sm text-[#bfb29f]">
            Проверьте себя или запустите викторину во время защиты проекта перед классом.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-[#161310] border border-[#3b342a] rounded-xl p-6 sm:p-8 shadow-xl">
            {/* Question Progress */}
            <div className="flex items-center justify-between text-xs text-[#a39786] border-b border-[#2d2822] pb-3 mb-6">
              <span className="font-mono text-[#c99a5b]">
                Вопрос {currentIdx + 1} из {QUIZ_QUESTIONS.length}
              </span>
              <span>
                Отвечено: {Object.keys(selectedAnswers).length} / {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Question Title */}
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#f5ebd9] mb-6 leading-snug">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, idx) => {
                const isSelected = userChoice === idx;
                const isCorrect = question.correctIndex === idx;

                let btnStyles = 'bg-[#12100e] border-[#2d2822] text-[#d1c5b4] hover:border-[#3d3428]';

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-950/70 border-emerald-600 text-emerald-100';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-950/70 border-rose-600 text-rose-100';
                  } else {
                    btnStyles = 'bg-[#100e0c] border-[#221e1a] text-[#6b6256] opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-4 ${btnStyles}`}
                  >
                    <span>{option}</span>
                    {isAnswered && (
                      <span className="shrink-0">
                        {isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                        {isSelected && !isCorrect && <X className="w-4 h-4 text-rose-400" />}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {isAnswered && (
              <div className="p-4 rounded-lg bg-[#1a1713] border border-[#2d2822] text-xs sm:text-sm text-[#b5a999] mb-6 space-y-1">
                <span className="font-semibold text-[#e8c382] block">
                  {userChoice === question.correctIndex ? 'Верно!' : 'Пояснение:'}
                </span>
                <p>{question.explanation}</p>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isAnswered
                    ? 'bg-[#c99a5b] text-black hover:bg-[#d8ab6e] shadow-md'
                    : 'bg-[#221c15] text-[#6b6256] cursor-not-allowed'
                }`}
              >
                {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Следующий вопрос' : 'Посмотреть результат'}
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="bg-[#161310] border border-[#c99a5b]/50 rounded-xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#2a2216] border border-[#c99a5b] text-[#c99a5b] mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5ebd9]">
                Ваш результат: {correctCount} из {QUIZ_QUESTIONS.length}
              </h3>
              <p className="text-sm text-[#b5a999]">
                {correctCount === 6
                  ? 'Блестяще! Вы подлинный знаток ордена имажинистов и готовы к высшему баллу у доски!'
                  : correctCount >= 4
                  ? 'Отличный результат! Основные принципы и история «Стойла Пегаса» усвоены на отлично.'
                  : 'Неплохо, но рекомендуем заглянуть в раздел «Карточки-гиды», чтобы закрепить детали перед уроком!'}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c99a5b] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#d8ab6e] transition-colors shadow-md"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Пройти викторину снова</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
