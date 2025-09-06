export type StoredUser = {
  name: string;
  email: string;
  avatar: string;
  phone: string;
  loggedAt: string;
};

const KEY = "auth:user";

export const setUser = (user: StoredUser) =>
  localStorage.setItem(KEY, JSON.stringify(user));

export const getUser = (): StoredUser | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as StoredUser) : null;
  } catch {
    return null;
  }
};

export const clearUser = () => localStorage.removeItem(KEY);
