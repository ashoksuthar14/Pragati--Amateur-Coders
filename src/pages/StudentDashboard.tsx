import React, { useEffect, useState } from 'react';
import { BookOpen, Headphones, FileText } from 'lucide-react';
import type { LearningType } from '../types';

const contentByType = {
  visual: {
    title: "Visual Learning Content",
    icon: BookOpen,
    content: [
      {
        title: "Photosynthesis Process",
        url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop",
        description: "Visual representation of how plants make their food"
      },
      {
        title: "Water Cycle",
        url: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?w=800&auto=format&fit=crop",
        description: "Diagram showing the water cycle process"
      }
    ]
  },
  auditory: {
    title: "Auditory Learning Content",
    icon: Headphones,
    content: [
      {
        title: "Sound Waves Explanation",
        url: "#",
        description: "Audio lecture about sound waves and their properties"
      },
      {
        title: "Verbal Math Tricks",
        url: "#",
        description: "Listen to quick mathematical shortcuts"
      }
    ]
  },
  text: {
    title: "Text-Based Learning Content",
    icon: FileText,
    content: [
      {
        title: "Introduction to Atoms",
        url: "#",
        description: "Comprehensive notes about atomic structure"
      },
      {
        title: "Basic Algebra Guide",
        url: "#",
        description: "Step-by-step guide to solving algebraic equations"
      }
    ]
  }
};

export function StudentDashboard() {
  const [learningType, setLearningType] = useState<LearningType>('visual');

  useEffect(() => {
    const storedType = localStorage.getItem('learningType') as LearningType;
    if (storedType) {
      setLearningType(storedType);
    }
  }, []);

  const content = contentByType[learningType];
  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <Icon className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Learning Dashboard</h1>
              <p className="text-gray-600">You are a {learningType} learner!</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.content.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {learningType === 'visual' && (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}