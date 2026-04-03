import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import ProjectsPage from "./ProjectsPage";
import Navbar from "./components/Navbar";

function AppLayout() {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default function Mainroute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
