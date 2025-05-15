import { createContext, useContext, useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────

const AppGlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// ─────────────────────────────────────────────────────────────────────────────

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [quiz, setQuiz] = useState<Record<string, string>[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);

  const state = useMemo(
    () => ({
      quiz,
      setQuiz,
      recommendations,
      setRecommendations,
    }),
    [quiz, recommendations]
  );

  // ─────────────────────────────────────────────────────────────────────

  return (
    <AppGlobalContext.Provider
      value={state}
    >
      {children}
    </AppGlobalContext.Provider>
  );
};

export const useGlobalState = (): GlobalContextProps => {
  const ctx = useContext(AppGlobalContext);

  if (!ctx) throw new Error("useGlobalState must be used within GlobalStateProvider");

  return ctx;
};

// ─── Types ───────────────────────────────────────────────────────────────────

type GlobalContextProps = {
  quiz: Record<string, string>[];
  setQuiz: (quiz: Record<string, string>[]) => void;
  recommendations: Recommendations | null;
  setRecommendations: (recommendations: Recommendations | null) => void;
}

type Recommendations = {
  resorts:  {
    "id": string,
    "title": string,
    "price_min": number,
    "price_max": number
  }[];
};