import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthenticationNavigation from './AuthenticationNavigation';
import DashboardNavigation from './DashboardNavigation';

const RoleBasedNavigation = ({ userRole = null, isAuthenticated = false, notificationCount = 0 }) => {
  const location = useLocation();

  const authRoutes = ['/login', '/student-registration', '/warden-registration'];
  const isAuthRoute = authRoutes?.includes(location?.pathname);

  if (isAuthRoute || !isAuthenticated) {
    return <AuthenticationNavigation />;
  }

  return (
    <DashboardNavigation 
      userRole={userRole} 
      notificationCount={notificationCount}
    />
  );
};

export default RoleBasedNavigation;