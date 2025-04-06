export type LearningType = 'visual' | 'auditory' | 'text';

export interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher';
  learningType?: LearningType;
  language: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    type: LearningType;
  }[];
}

export interface Student {
  id: string;
  name: string;
  learningType: LearningType;
  class: string;
}