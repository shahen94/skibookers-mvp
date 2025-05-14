import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

// ─────────────────────────────────────────────────────────────────────────────

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const { mutate, isPending } = useSignup();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log("Signup successful:", data);
        },
        onError: (err: any) => {
          const message = err?.response?.data?.message || "Signup failed. Please try again.";
          setFormError(message);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {formError && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200">
              {formError}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}