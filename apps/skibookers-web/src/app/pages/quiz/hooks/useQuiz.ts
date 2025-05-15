import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../lib/http"
import { useGlobalState } from "../../../context/app-global"

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

export const useRecommendations = () => {
  const { setQuiz, setRecommendations } = useGlobalState();

  return useMutation({
    mutationFn: async (quiz: { quiz: Record<string, string>[] }) => {
      setQuiz(quiz.quiz);

      const response = await api.post('/recommendation/quiz', quiz);

      setRecommendations(response.data);

      return response.data;
    }
  });
}

// ─── Types ───────────────────────────────────────────────────────────────────

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
};