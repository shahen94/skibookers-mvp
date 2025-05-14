import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { TOKEN_STORAGE_KEY } from "../../constants";

// ─────────────────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// ─────────────────────────────────────────────────────────────────────────────

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem(TOKEN_STORAGE_KEY));

  // ─────────────────────────────────────────────────────────────────────

  const login = useCallback((newToken: string) => {
    setToken(newToken);
    localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }, []);

  const state = useMemo(
    () => ({
      isAuthenticated: !!token,
      token,
      login,
      logout,
    }),
    [token]
  )

  return (
    <AuthContext.Provider
      value={state}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAuth must be used within AuthProvider");

  return ctx;
};

// ─── Types ───────────────────────────────────────────────────────────────────

type AuthContextProps = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}