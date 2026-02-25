import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "super_admin" | "admin" | "dosen" | "mahasiswa";

interface User {
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const mockUsers: Record<UserRole, User> = {
  super_admin: { name: "Super Admin", email: "superadmin@elearn.id", role: "super_admin" },
  admin: { name: "Admin Utama", email: "admin@elearn.id", role: "admin" },
  dosen: { name: "Dr. Budi Santoso", email: "budi@elearn.id", role: "dosen" },
  mahasiswa: { name: "Andi Pratama", email: "andi@elearn.id", role: "mahasiswa" },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole) => setUser(mockUsers[role]);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
