import React, { useState } from 'react';
import { Users, BookOpen, Headphones, FileText } from 'lucide-react';
import { mockStudents } from '../data/mockStudents';
import type { LearningType } from '../types';

const teachingStrategies: Record<LearningType, string[]> = {
  visual: [
    "Use diagrams and charts frequently",
    "Incorporate color coding in notes",
    "Create mind maps for complex topics",
    "Use visual analogies and metaphors"
  ],
  auditory: [
    "Implement group discussions",
    "Use verbal analogies",
    "Create musical mnemonics",
    "Encourage peer teaching"
  ],
  text: [
    "Provide written summaries",
    "Use structured note-taking templates",
    "Assign reading comprehension exercises",
    "Create written step-by-step guides"
  ]
};

export function TeacherDashboard() {
  const [selectedType, setSelectedType] = useState<LearningType | null>(null);

  const groupedStudents = mockStudents.reduce((acc, student) => {
    if (!acc[student.learningType]) {
      acc[student.learningType] = [];
    }
    acc[student.learningType].push(student);
    return acc;
  }, {} as Record<LearningType, typeof mockStudents>);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-gray-600">View and manage your student groups</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <h2 className="text-lg font-semibold">Visual Learners</h2>
            </div>
            <div className="space-y-2">
              {groupedStudents.visual?.map(student => (
                <div
                  key={student.id}
                  className="p-2 bg-purple-50 rounded cursor-pointer hover:bg-purple-100"
                  onClick={() => setSelectedType('visual')}
                >
                  {student.name} - {student.class}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Headphones className="h-6 w-6 text-green-600" />
              <h2 className="text-lg font-semibold">Auditory Learners</h2>
            </div>
            <div className="space-y-2">
              {groupedStudents.auditory?.map(student => (
                <div
                  key={student.id}
                  className="p-2 bg-green-50 rounded cursor-pointer hover:bg-green-100"
                  onClick={() => setSelectedType('auditory')}
                >
                  {student.name} - {student.class}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold">Text-Based Learners</h2>
            </div>
            <div className="space-y-2">
              {groupedStudents.text?.map(student => (
                <div
                  key={student.id}
                  className="p-2 bg-blue-50 rounded cursor-pointer hover:bg-blue-100"
                  onClick={() => setSelectedType('text')}
                >
                  {student.name} - {student.class}
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedType && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Teaching Strategies for {selectedType} Learners</h2>
            <ul className="list-disc pl-5 space-y-2">
              {teachingStrategies[selectedType].map((strategy, index) => (
                <li key={index} className="text-gray-700">{strategy}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}