import { Route, Routes, Navigate } from 'react-router-dom';
import QuizScreen from './pages/quiz/page';
import LoginScreen from './pages/auth/login/page';
import SignupScreen from './pages/auth/signup/page';
import { ProtectedRoute } from './components/route/private';
import { PublicOnlyRoute } from './components/route/public';
import { RecommendationsScreen } from './pages/recommendations/page';

// ─────────────────────────────────────────────────────────────────────────────

export function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/quiz" replace />
          }
        />
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute>
              <RecommendationsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/login"
          element={
            <PublicOnlyRoute>
              <LoginScreen />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <PublicOnlyRoute>
              <SignupScreen />
            </PublicOnlyRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
