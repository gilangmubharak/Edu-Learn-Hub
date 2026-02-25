import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import CoursesPage from "@/pages/CoursesPage";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="my-courses" element={<CoursesPage />} />
              <Route path="manage-courses" element={<CoursesPage />} />
              <Route path="materials" element={<PlaceholderPage title="Materi" description="Kelola dan akses materi pembelajaran" />} />
              <Route path="assignments" element={<PlaceholderPage title="Tugas" description="Lihat dan kerjakan tugas yang tersedia" />} />
              <Route path="quizzes" element={<PlaceholderPage title="Kuis" description="Akses kuis dan ujian online" />} />
              <Route path="grades" element={<PlaceholderPage title="Nilai" description="Lihat rekap nilai dan progress akademik" />} />
              <Route path="discussions" element={<PlaceholderPage title="Diskusi" description="Forum diskusi antar mahasiswa dan dosen" />} />
              <Route path="students" element={<PlaceholderPage title="Mahasiswa" description="Daftar mahasiswa yang terdaftar" />} />
              <Route path="manage-admins" element={<PlaceholderPage title="Kelola Admin" />} />
              <Route path="manage-lecturers" element={<PlaceholderPage title="Kelola Dosen" />} />
              <Route path="manage-students" element={<PlaceholderPage title="Kelola Mahasiswa" />} />
              <Route path="manage-users" element={<PlaceholderPage title="Kelola User" />} />
              <Route path="approvals" element={<PlaceholderPage title="Persetujuan Akun" />} />
              <Route path="categories" element={<PlaceholderPage title="Kategori" />} />
              <Route path="statistics" element={<PlaceholderPage title="Statistik Global" />} />
              <Route path="activity-logs" element={<PlaceholderPage title="Log Aktivitas" />} />
              <Route path="settings" element={<PlaceholderPage title="Pengaturan" />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
