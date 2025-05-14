import { useQuery } from "@tanstack/react-query"
import { api } from "../../../lib/http"

// ─────────────────────────────────────────────────────────────────────────────

export const useQuiz = () => {
  return useQuery({
    queryKey: ["quiz"],
    queryFn: async () => {
      const response = await api.get<QuizQuestion[]>("/quiz")
      return response.data;
    },
  })
}

// ─── Types ───────────────────────────────────────────────────────────────────

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
};