import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

// ─────────────────────────────────────────────────────────────────────────────

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
}