import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/http";
import { useAuth } from "../../../context/auth";

// ─────────────────────────────────────────────────────────────────────────────

export function useSignup() {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const response = await api.post<SignupResponse>("/auth/signup", data);

      login(response.data.accessToken);

      return response.data;
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────

type SignupPayload = {
  email: string;
  password: string;
};

type SignupResponse = {
  accessToken: string;
};