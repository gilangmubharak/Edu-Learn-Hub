import { useAuth, UserRole } from "@/contexts/AuthContext";
import { GraduationCap, Shield, UserCheck, BookOpen, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const roles: { role: UserRole; label: string; desc: string; icon: React.ElementType; gradient: string }[] = [
  { role: "super_admin", label: "Super Admin", desc: "Akses penuh ke seluruh sistem", icon: Shield, gradient: "gradient-warm" },
  { role: "admin", label: "Admin", desc: "Kelola pengguna dan kursus", icon: UserCheck, gradient: "gradient-primary" },
  { role: "dosen", label: "Dosen", desc: "Kelola kursus, materi, dan nilai", icon: BookOpen, gradient: "gradient-accent" },
  { role: "mahasiswa", label: "Mahasiswa", desc: "Akses kursus dan kerjakan tugas", icon: Users, gradient: "gradient-success" },
];

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto shadow-card-lg">
            <GraduationCap className="w-9 h-9 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">EduLearn</h1>
          <p className="text-muted-foreground">Sistem E-Learning Modern</p>
        </div>

        {/* Role Cards */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-center text-muted-foreground">Pilih role untuk demo</p>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((r, i) => (
              <button
                key={r.role}
                onClick={() => handleLogin(r.role)}
                className={cn(
                  "bg-card border border-border rounded-xl p-5 text-left hover:shadow-card-lg hover:border-primary/30 transition-all duration-300 animate-fade-in group"
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", r.gradient)}>
                  <r.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{r.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Ini adalah demo UI. Klik role untuk masuk ke dashboard.
        </p>
      </div>
    </div>
  );
}
