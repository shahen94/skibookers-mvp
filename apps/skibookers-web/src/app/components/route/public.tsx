import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

// ─────────────────────────────────────────────────────────────────────────────

export function PublicOnlyRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/quiz" replace />;

  return <>{children}</>;
}