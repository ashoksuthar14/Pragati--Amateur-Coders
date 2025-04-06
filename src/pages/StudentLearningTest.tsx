import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { learningPatternQuestions } from '../data/questions';
import type { LearningType } from '../types';

export function StudentLearningTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (type: LearningType) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < learningPatternQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate learning type based on most frequent answer
      const counts = newAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const learningType = Object.entries(counts).reduce((a, b) => 
        counts[a] > counts[b[0]] ? a : b[0]
      );

      // Store in localStorage for offline access
      localStorage.setItem('learningType', learningType);
      navigate('/student/dashboard');
    }
  };

  const question = learningPatternQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Learning Pattern Test</h2>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / learningPatternQuestions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Question {currentQuestion + 1} of {learningPatternQuestions.length}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">{question.text}</h3>
            <div className="space-y-4">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full text-left px-6 py-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-colors duration-150"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}