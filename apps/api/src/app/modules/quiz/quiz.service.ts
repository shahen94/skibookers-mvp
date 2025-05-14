import { Injectable } from "@nestjs/common";

// ─────────────────────────────────────────────────────────────────────────────

@Injectable()
export class QuizService {
  getQuiz() {
    return questions;
  }
}

// ─── Constants ───────────────────────────────────────────────────────────────

const questions = [
  {
    id: "region",
    question: "Where would you like to ski?",
    options: ["Alps", "Rockies", "Scandinavia", "Japan", "Eastern Europe"],
  },
  {
    id: "budget",
    question: "What’s your budget per day?",
    options: ["<$100", "$100–$200", "$200–$300", "$300+"],
  },
  {
    id: "vibe",
    question: "What vibe are you going for?",
    options: ["Family", "Luxury", "Party", "Adventure", "Relaxed"],
  },
  {
    id: "group",
    question: "Who are you traveling with?",
    options: ["Solo", "Couple", "Family", "Friends", "Corporate Group"],
  },
  {
    id: "skill",
    question: "Your skiing experience?",
    options: ["Beginner", "Intermediate", "Advanced", "Pro"],
  },
];