import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LandingPage() {
  const navigate = useNavigate();
  const { translate, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ShikshaPath</span>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="px-3 py-1 rounded border border-gray-300"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="te">తెలుగు</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {translate("Welcome to ShikshaPath")}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {translate("An AI-based personalized learning platform for rural and government school students")}
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/student/test')}
              className="relative group bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center space-x-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-semibold text-gray-900">
                  {translate("Student Login")}
                </span>
              </div>
            </button>

            <button
              onClick={() => navigate('/teacher/dashboard')}
              className="relative group bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-center space-x-4">
                <Users className="h-8 w-8 text-green-600" />
                <span className="text-xl font-semibold text-gray-900">
                  {translate("Teacher Login")}
                </span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}