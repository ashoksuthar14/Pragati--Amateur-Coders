import { Question } from '../types';

export const learningPatternQuestions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to learn about a new topic?",
    options: [
      { id: "1a", text: "Watch videos or look at diagrams", type: "visual" },
      { id: "1b", text: "Listen to an explanation", type: "auditory" },
      { id: "1c", text: "Read detailed notes", type: "text" }
    ]
  },
  {
    id: 2,
    text: "When solving a problem, you usually:",
    options: [
      { id: "2a", text: "Draw a diagram or picture", type: "visual" },
      { id: "2b", text: "Talk it through with someone", type: "auditory" },
      { id: "2c", text: "Make a list of steps", type: "text" }
    ]
  },
  {
    id: 3,
    text: "What helps you remember information best?",
    options: [
      { id: "3a", text: "Charts and graphs", type: "visual" },
      { id: "3b", text: "Repeating it out loud", type: "auditory" },
      { id: "3c", text: "Writing it down", type: "text" }
    ]
  },
  {
    id: 4,
    text: "When learning a new skill, you prefer to:",
    options: [
      { id: "4a", text: "Watch someone demonstrate", type: "visual" },
      { id: "4b", text: "Listen to verbal instructions", type: "auditory" },
      { id: "4c", text: "Read the instructions", type: "text" }
    ]
  },
  {
    id: 5,
    text: "Which activity do you enjoy most in class?",
    options: [
      { id: "5a", text: "Looking at maps and charts", type: "visual" },
      { id: "5b", text: "Group discussions", type: "auditory" },
      { id: "5c", text: "Reading and writing exercises", type: "text" }
    ]
  }
];