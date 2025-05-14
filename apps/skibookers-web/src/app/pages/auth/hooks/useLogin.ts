import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/http";
import { useAuth } from "../../../context/auth";

// ─────────────────────────────────────────────────────────────────────────────

export function useLogin() {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await api.post<LoginResponse>("/auth/login", data);

      login(response.data.accessToken);

      return response.data;
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};