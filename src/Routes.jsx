import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import MarkAttendance from './pages/mark-attendance';
import Login from './pages/login';
import WardenRegistration from './pages/warden-registration';
import WardenDashboard from './pages/warden-dashboard';
import StudentDashboard from './pages/student-dashboard';
import StudentRegistration from './pages/student-registration';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Login />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/warden-registration" element={<WardenRegistration />} />
        <Route path="/warden-dashboard" element={<WardenDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

