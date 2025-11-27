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
    const err: any = new Error(text || res.statusText);
    err.status = res.status;                 // 👈 important
    throw err;
  }
  return res.json() as Promise<T>;
}
export type TokenResponse = {
  access_token: string;
  token_type: "bearer" | string;
};

export const authApi = {
  // ⬇️ FORM-URLENCODED (OAuth2) au lieu de JSON
  login(email: string, password: string) {
    const body = new URLSearchParams();
    body.set("username", email);
    body.set("password", password);
    return api<TokenResponse>("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  },

  // ok en JSON
  register(email: string, password: string, full_name?: string) {
    return api<any>("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, full_name }),
    });
  },

  me() { return api<any>("/api/v1/users/me"); },
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
  [k: string]: unknown; // pour fusionner le draft
};

// --- efolder ---
export type FolderSummary = {
  id: number;
  name: string;
  color?: string | null;
  file_count: number;
  last_modified?: string | null;
};

export type FolderFile = {
  id: number;
  name: string;
  size: number;
  mime: string | null;
  url: string;
  uploaded_at: string;
};

export type FolderDetails = {
  id: number;
  name: string;
  color?: string | null;
  files: FolderFile[];
};

export const folderApi = {
  list(): Promise<FolderSummary[]> {
    return api("/api/v1/folders");
  },
  create(payload: { name: string; color?: string }) {
    return api<FolderSummary>("/api/v1/folders", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
  get(id: number) {
    return api<FolderDetails>(`/api/v1/folders/${id}`);
  },
  upload(id: number, file: File) {
    const token = localStorage.getItem("rayonn:token");
    const fd = new FormData();
    fd.append("upload", file);
    return fetch(`${API_URL}/api/v1/folders/${id}/upload`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: fd,
    }).then(async (r) => {
      if (!r.ok) throw new Error(await r.text());
      return r.json();
    });
  },
  removeFile(folderId: number, fileId: number) {
    return api(`/api/v1/folders/${folderId}/files/${fileId}`, { method: "DELETE" });
  },
};
