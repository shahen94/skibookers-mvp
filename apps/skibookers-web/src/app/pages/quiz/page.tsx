import { useState } from "react";
import { useQuiz, useRecommendations } from "./hooks/useQuiz";
import { useNavigate } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────

export default function QuizScreen() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { data, isPending, isError } = useQuiz();
  const { mutate: submitRecommendations } = useRecommendations();
  const navigate = useNavigate();


  const handleSelect = (questionId: string, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const quizArray = Object.keys(answers).map((key) => ({
      id: key,
      answer: answers[key]
    }));

    submitRecommendations({ quiz: quizArray }, {
      onSuccess: () => {
        navigate("/recommendations")
      }
    });
  };

  const totalQuestions = data?.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Plan Your Perfect Ski Trip</h1>

        {isPending && (
          <div className="text-center py-10 text-gray-600 text-lg">Loading quiz...</div>
        )}

        {isError && (
          <div className="text-center py-6 bg-red-100 text-red-700 border border-red-300 rounded-md">
            Failed to load quiz. Please try again later.
          </div>
        )}

        {!isPending && !isError && data.map((q) => (
          <div key={q.id}>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">{q.question}</h2>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    answers[q.id] === opt
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!isPending && !isError && (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== totalQuestions}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        )}

        {submitted && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            <p className="font-medium">Thanks! We’re curating ski resorts for you...</p>
          </div>
        )}
      </div>
    </div>
  );
}