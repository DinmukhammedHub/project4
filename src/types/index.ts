export interface Poet {
  id: string;
  name: string;
  role: string;
  years: string;
  image: string;
  bio: string;
  relationToImaginism: string;
  famousQuote: string;
  keyWorks: string[];
  samplePoem: {
    title: string;
    year: string;
    text: string;
    analysis: string;
  };
}

export interface CardGuideAnswer {
  id: string;
  category: 'silver_age' | 'imaginism' | 'other_movements';
  number: number;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  keyTerms: string[];
}

export interface MovementComparison {
  name: string;
  motto: string;
  mainPrinciple: string;
  attitudeToWord: string;
  keyFigures: string[];
  characteristicWork: string;
  colorTheme: string;
}

export interface MovementComparisonCriteria {
  id: string;
  category: string;
  label: string;
  description: string;
  symbolism: string;
  acmeism: string;
  imaginism: string;
  futurism: string;
  highlightDifference?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
