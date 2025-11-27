// Frontend/src/api/client.ts
export const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("rayonn:token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> | undefined),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (res.status === 401) {
    localStorage.removeItem("rayonn:token");
    throw new Error("Unauthorized");
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json() as Promise<T>;
}

export type TokenResponse = { access_token: string; token_type: string };

export const authApi = {
  login(email: string, password: string) {
    return api<TokenResponse>("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  me() {
    return api<any>("/api/v1/users/me");
  },
};


export const userApi = {
  updatePreferences(payload: any) {
    return api<any>("/api/v1/users/me/preferences", {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  },
  updateOnboarding(payload: any) {
    return api<any>("/api/v1/users/me/onboarding", {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
  },
};

export type OBQuestion = OnboardingQuestion;

export type QuestionOption = { value: string; label: string };
export type OnboardingQuestion = {
  key: string; label: string; help?: string | null;
  type: "single_choice" | "multi_choice" | "slider" | "number";
  required: boolean; order: number;
  options?: QuestionOption[];
  min?: number; max?: number; step?: number;
};

export const onboardingApi = {
  listQuestions: () => api<OnboardingQuestion[]>("/api/v1/onboarding/questions"),
  answer: (key: string, value: any) =>
    api<{stored: boolean}>("/api/v1/onboarding/answer", {
      method: "POST", body: JSON.stringify({ key, value })
    }),
  finish: (answers: Record<string, any>) =>
    api<{ok: boolean}>("/api/v1/onboarding/finish", {
      method: "POST", body: JSON.stringify({ answers, onboarding_done: true })
    }),
};

export type OnboardingUpdatePayload = {
  first_name?: string;
  last_name?: string;
  birth_date?: string;
  grade?: string;
  email?: string;
  onboarding_done?: boolean;
  [k: string]: unknown; 
};

export default api;